import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  phone: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const businessSchema = z.object({
  name: z.string().min(2, 'Business name must be at least 2 characters'),
  description: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  subcategory: z.string().optional(),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'ZIP code is required'),
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().email().optional(),
  website: z.string().url().optional().or(z.literal('')),
  halalCertified: z.boolean().optional(),
  womenOwned: z.boolean().optional(),
});

export const listingSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  type: z.enum(['SERVICE', 'FOR_SALE', 'HOUSING', 'JOB', 'COMMUNITY']),
  category: z.string().min(1, 'Category is required'),
  subcategory: z.string().optional(),
  price: z.number().optional(),
  priceNegotiable: z.boolean().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().optional(),
  address: z.string().optional(),
});

export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  title: z.string().optional(),
  comment: z.string().min(10, 'Review must be at least 10 characters'),
});
