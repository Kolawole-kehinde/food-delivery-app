import { z } from 'zod';

export const checkoutSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is too short'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zip: z.string().min(4, 'Zip code is too short'),
  payment: z.enum(['card', 'paypal', 'cod'], {
    required_error: 'Select a payment method',
  }),
  
});
