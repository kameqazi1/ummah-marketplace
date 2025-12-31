# Ummah Marketplace - Setup Guide

A modern web application for connecting Muslims with Muslim-owned businesses, services, and trades.

## Features

- User authentication with JWT
- Business listings and management
- Map view for local discovery
- Advanced search and filtering
- Review and rating system
- Web scraping for business data
- Admin dashboard
- Responsive mobile-first design
- Role-based access control (User, Business Owner, Admin)

## Tech Stack

- **Frontend**: Next.js 15, React, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT
- **Web Scraping**: Cheerio, Puppeteer
- **Maps**: Google Maps API (to be configured)

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
cd ummah-marketplace
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required environment variables:
- `DATABASE_URL`: Your PostgreSQL connection string
- `NEXTAUTH_SECRET`: Secret key for authentication
- `JWT_SECRET`: Secret key for JWT tokens
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Google Maps API key (optional)
- `CLOUDINARY_*`: Cloudinary credentials for image uploads (optional)

4. Set up the database:

```bash
# Create the database
createdb ummah_marketplace

# Run Prisma migrations
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate
```

5. Seed the database (optional):

```bash
npx prisma db seed
```

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## Database Management

### View Database in Prisma Studio

```bash
npx prisma studio
```

### Create a Migration

```bash
npx prisma migrate dev --name your_migration_name
```

### Reset Database

```bash
npx prisma migrate reset
```

## Project Structure

```
ummah-marketplace/
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── businesses/   # Business CRUD operations
│   │   └── admin/        # Admin-only endpoints
│   ├── businesses/       # Business listing pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── BusinessCard.tsx
│   └── CategoryGrid.tsx
├── lib/                  # Utility libraries
│   ├── prisma.ts        # Prisma client
│   ├── auth.ts          # Authentication helpers
│   ├── validations.ts   # Zod schemas
│   └── scraper.ts       # Web scraping utilities
├── prisma/
│   └── schema.prisma    # Database schema
└── public/              # Static assets
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Businesses
- `GET /api/businesses` - Get all businesses (with filters)
- `POST /api/businesses` - Create business (authenticated)
- `GET /api/businesses/[id]` - Get single business
- `PUT /api/businesses/[id]` - Update business (owner/admin)
- `DELETE /api/businesses/[id]` - Delete business (owner/admin)

### Admin
- `POST /api/admin/scrape` - Scrape businesses from URL (admin only)

## User Roles

1. **USER**: Can browse, search, review businesses
2. **BUSINESS_OWNER**: Can create and manage their businesses
3. **ADMIN**: Full access including scraping and user management

## Creating an Admin User

After setting up the database, you can create an admin user directly in the database:

```sql
-- Update an existing user to admin
UPDATE "User" SET role = 'ADMIN' WHERE email = 'your-email@example.com';
```

Or use Prisma Studio to update the user role.

## Features to Implement

### Completed
- [x] Project setup with Next.js and TypeScript
- [x] Database schema with Prisma
- [x] Authentication system with JWT
- [x] Core UI components (Navbar, Footer, Cards)
- [x] Business listing and management
- [x] Web scraping module
- [x] Homepage with hero and categories

### In Progress / TODO
- [ ] Map view with Google Maps integration
- [ ] User dashboard
- [ ] Business owner dashboard
- [ ] Admin dashboard (full featured)
- [ ] Advanced search functionality
- [ ] Review and rating system
- [ ] Image upload with Cloudinary
- [ ] Messaging system
- [ ] Email notifications
- [ ] Payment integration (for premium features)
- [ ] Mobile app (React Native)

## Web Scraping Usage

To scrape businesses (admin only):

```bash
POST /api/admin/scrape
Authorization: Bearer <admin-jwt-token>

{
  "url": "https://example-directory.com/muslim-businesses",
  "category": "Food & Catering",
  "defaultUserId": "user-id-here"
}
```

## Google Maps Integration

To enable map features:

1. Get a Google Maps API key from Google Cloud Console
2. Enable Maps JavaScript API and Places API
3. Add the key to `.env`:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-key-here
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Docker

```bash
docker build -t ummah-marketplace .
docker run -p 3000:3000 ummah-marketplace
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## Security Considerations

- Always use HTTPS in production
- Keep JWT secrets secure
- Validate and sanitize all user inputs
- Implement rate limiting on API endpoints
- Regular security audits
- Keep dependencies updated

## Support

For issues and questions, please open an issue on GitHub.

## License

MIT License - see LICENSE file for details

---

**Built with trust and service for the Muslim community**
