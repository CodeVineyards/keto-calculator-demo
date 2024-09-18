import { z } from 'zod';

export const FoodItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  calories: z.number().positive(),
  carbs: z.number().nonnegative(),
  protein: z.number().nonnegative(),
  fats: z.number().nonnegative(),
  fiber: z.number().nonnegative(),
  avgUnitSize: z.number().nullable(),
});

export type FoodItem = z.infer<typeof FoodItemSchema>;

// Example Method
// export class FoodItemMethods {
//   static calculateTotalCalories(foodItem: FoodItem, amountInGrams: number): number {
//     return (foodItem.calories / 100) * amountInGrams;
//   }

//   static calculateKetoRatio(foodItem: FoodItem): number {
//     return foodItem.fats / (foodItem.carbs + foodItem.protein);
//   }
// }
