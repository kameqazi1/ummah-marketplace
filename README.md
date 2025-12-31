# Ummah Marketplace

A modern web application connecting Muslims with Muslim-owned businesses, services, and trades. Features include business listings, reviews, map view, web scraping, and admin management.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Database

You have three options:

**Option A: Prisma Dev (Easiest - Recommended for Testing)**
```bash
npx prisma dev
```
This starts a local PostgreSQL instance automatically.

**Option B: Cloud Database (Recommended for Production)**
Use [Supabase](https://supabase.com), [Neon](https://neon.tech), or [Railway](https://railway.app)

**Option C: Local PostgreSQL**
```bash
createdb ummah_marketplace
```

### 3. Run Migrations

```bash
npm run db:migrate
npm run db:generate
```

### 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Features

- User authentication (JWT)
- Business CRUD operations
- Advanced search & filtering
- Review and rating system
- Web scraping module
- Admin dashboard
- Responsive UI with TailwindCSS

## Tech Stack

- Next.js 15, React, TypeScript
- PostgreSQL + Prisma ORM
- TailwindCSS
- JWT Authentication

## Documentation

- See `README_SETUP.md` for detailed setup instructions
- See `IMPLEMENTATION_SUMMARY.md` for feature status and API docs
- See `PROJECT_PROMPT.md` for original requirements

## License

MIT License

---

**Built for the Muslim community with trust and service**
