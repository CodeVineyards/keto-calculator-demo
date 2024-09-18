import { FoodItem } from '@/src/entities/models/FoodItem';

export class CalculateKetoRatio {
  execute(foodItem: FoodItem): number {
    // Calculate the keto ratio (fats / (carbs + protein))
    return foodItem.fats / (foodItem.carbs + foodItem.protein);
  }
}
