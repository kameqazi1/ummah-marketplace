import * as cheerio from 'cheerio';

export interface ScrapedBusiness {
  name: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  category?: string;
}

export async function scrapeBusinessDirectory(url: string): Promise<ScrapedBusiness[]> {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const businesses: ScrapedBusiness[] = [];

    // Generic scraping logic - customize based on target website structure
    $('.business-listing, .listing-item, .business-card').each((_, element) => {
      const $el = $(element);

      const business: ScrapedBusiness = {
        name: $el.find('.business-name, .name, h2, h3').first().text().trim(),
        address: $el.find('.address, .street-address').first().text().trim(),
        phone: $el.find('.phone, .tel, [href^="tel:"]').first().text().trim(),
        email: $el.find('.email, [href^="mailto:"]').first().text().trim(),
        website: $el.find('a.website, .url').first().attr('href'),
        description: $el.find('.description, .bio').first().text().trim(),
      };

      if (business.name) {
        businesses.push(business);
      }
    });

    return businesses;
  } catch (error) {
    console.error('Scraping error:', error);
    return [];
  }
}

export async function scrapeGoogleMapsData(searchQuery: string): Promise<ScrapedBusiness[]> {
  // This would require Puppeteer for dynamic content
  // Placeholder implementation
  console.log('Google Maps scraping for:', searchQuery);
  return [];
}

export function parseAddress(fullAddress: string): {
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
} {
  const parts = fullAddress.split(',').map(p => p.trim());

  if (parts.length >= 3) {
    const stateZip = parts[parts.length - 1].match(/([A-Z]{2})\s+(\d{5})/);

    return {
      address: parts[0],
      city: parts[parts.length - 2],
      state: stateZip?.[1],
      zipCode: stateZip?.[2],
    };
  }

  return { address: fullAddress };
}

export function extractPhone(text: string): string | undefined {
  const phoneRegex = /(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}/;
  const match = text.match(phoneRegex);
  return match?.[0];
}

export function extractEmail(text: string): string | undefined {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const match = text.match(emailRegex);
  return match?.[0];
}
