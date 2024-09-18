import { z } from 'zod';

export const NutritionalInfoSchema = z.object({
  calories: z.number().positive(),
  carbs: z.number().nonnegative(),
  protein: z.number().nonnegative(),
  fats: z.number().nonnegative(),
  fiber: z.number().nonnegative(),
});

export type NutritionalInfo = z.infer<typeof NutritionalInfoSchema>;
