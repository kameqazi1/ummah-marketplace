import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { businessSchema } from '@/lib/validations';

// GET all businesses with filtering
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const city = searchParams.get('city');
    const state = searchParams.get('state');
    const halalCertified = searchParams.get('halalCertified');
    const verified = searchParams.get('verified');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    const where: Record<string, unknown> = {
      status: 'APPROVED',
    };

    if (category) where.category = category;
    if (city) where.city = city;
    if (state) where.state = state;
    if (halalCertified === 'true') where.halalCertified = true;
    if (verified === 'true') where.verified = true;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { category: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [businesses, total] = await Promise.all([
      prisma.business.findMany({
        where,
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          reviews: {
            select: {
              rating: true,
            },
          },
          _count: {
            select: {
              reviews: true,
            },
          },
        },
        take: limit,
        skip: offset,
        orderBy: [
          { featured: 'desc' },
          { createdAt: 'desc' },
        ],
      }),
      prisma.business.count({ where }),
    ]);

    // Calculate average rating for each business
    const businessesWithRating = businesses.map(business => {
      const avgRating = business.reviews.length > 0
        ? business.reviews.reduce((sum, r) => sum + r.rating, 0) / business.reviews.length
        : 0;

      const { reviews, ...businessData } = business;
      return {
        ...businessData,
        rating: avgRating,
        reviewCount: business._count.reviews,
      };
    });

    return NextResponse.json({
      businesses: businessesWithRating,
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Get businesses error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST create new business
export async function POST(req: NextRequest) {
  try {
    const userId = req.headers.get('x-user-id');
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validated = businessSchema.parse(body);

    const business = await prisma.business.create({
      data: {
        ...validated,
        ownerId: userId,
        images: body.images || [],
        serviceAreas: body.serviceAreas || [],
        languages: body.languages || ['English'],
        paymentMethods: body.paymentMethods || [],
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json(business, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error && 'issues' in error) {
      return NextResponse.json(
        { error: 'Validation error', details: error },
        { status: 400 }
      );
    }

    console.error('Create business error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
