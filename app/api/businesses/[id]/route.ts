import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface Params {
  params: Promise<{ id: string }>;
}

// GET single business
export async function GET(req: NextRequest, context: Params) {
  try {
    const { id } = await context.params;

    const business = await prisma.business.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
        _count: {
          select: {
            reviews: true,
            favorites: true,
          },
        },
      },
    });

    if (!business) {
      return NextResponse.json(
        { error: 'Business not found' },
        { status: 404 }
      );
    }

    // Increment view count
    await prisma.business.update({
      where: { id },
      data: { views: { increment: 1 } },
    });

    // Calculate average rating
    const avgRating = business.reviews.length > 0
      ? business.reviews.reduce((sum, r) => sum + r.rating, 0) / business.reviews.length
      : 0;

    return NextResponse.json({
      ...business,
      rating: avgRating,
    });
  } catch (error) {
    console.error('Get business error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT update business
export async function PUT(req: NextRequest, context: Params) {
  try {
    const userId = req.headers.get('x-user-id');
    const userRole = req.headers.get('x-user-role');
    const { id } = await context.params;

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const business = await prisma.business.findUnique({
      where: { id },
    });

    if (!business) {
      return NextResponse.json(
        { error: 'Business not found' },
        { status: 404 }
      );
    }

    // Check if user owns the business or is admin
    if (business.ownerId !== userId && userRole !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const body = await req.json();
    const updated = await prisma.business.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Update business error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE business
export async function DELETE(req: NextRequest, context: Params) {
  try {
    const userId = req.headers.get('x-user-id');
    const userRole = req.headers.get('x-user-role');
    const { id } = await context.params;

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const business = await prisma.business.findUnique({
      where: { id },
    });

    if (!business) {
      return NextResponse.json(
        { error: 'Business not found' },
        { status: 404 }
      );
    }

    // Check if user owns the business or is admin
    if (business.ownerId !== userId && userRole !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    await prisma.business.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Business deleted successfully' });
  } catch (error) {
    console.error('Delete business error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
