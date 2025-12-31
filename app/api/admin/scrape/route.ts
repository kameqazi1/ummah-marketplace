import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { scrapeBusinessDirectory, parseAddress } from '@/lib/scraper';

export async function POST(req: NextRequest) {
  try {
    const userRole = req.headers.get('x-user-role');

    if (userRole !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Forbidden - Admin access required' },
        { status: 403 }
      );
    }

    const { url, category, defaultUserId } = await req.json();

    if (!url || !defaultUserId) {
      return NextResponse.json(
        { error: 'URL and defaultUserId are required' },
        { status: 400 }
      );
    }

    // Scrape businesses from URL
    const scrapedBusinesses = await scrapeBusinessDirectory(url);

    const results = {
      total: scrapedBusinesses.length,
      created: 0,
      failed: 0,
      errors: [] as string[],
    };

    // Process each scraped business
    for (const scraped of scrapedBusinesses) {
      try {
        // Parse address if provided
        const addressData = scraped.address
          ? parseAddress(scraped.address)
          : {};

        // Check if business already exists
        const existing = await prisma.business.findFirst({
          where: {
            name: scraped.name,
            phone: scraped.phone,
          },
        });

        if (existing) {
          continue; // Skip duplicates
        }

        await prisma.business.create({
          data: {
            name: scraped.name,
            description: scraped.description || '',
            category: category || scraped.category || 'General',
            address: addressData.address || scraped.address || '',
            city: addressData.city || scraped.city || '',
            state: addressData.state || scraped.state || '',
            zipCode: addressData.zipCode || scraped.zipCode || '',
            phone: scraped.phone || '',
            email: scraped.email,
            website: scraped.website,
            ownerId: defaultUserId,
            scrapedFrom: url,
            status: 'PENDING', // Requires admin approval
          },
        });

        results.created++;
      } catch (error) {
        results.failed++;
        results.errors.push(`Failed to create ${scraped.name}: ${error}`);
      }
    }

    // Update scraping source stats
    await prisma.scrapingSource.upsert({
      where: { url },
      create: {
        name: new URL(url).hostname,
        url,
        selector: {},
        lastScraped: new Date(),
        scrapedCount: results.created,
      },
      update: {
        lastScraped: new Date(),
        scrapedCount: { increment: results.created },
      },
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error('Scraping error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
