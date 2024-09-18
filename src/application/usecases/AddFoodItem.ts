import { FoodItemInput } from '@/src/application/dto/FoodItemInput';
import { FoodItemRepository } from '@/src/application/repositories/FoodItemRepository';

import { FoodItem, FoodItemSchema } from '@/src/entities/models/FoodItem';

export class AddFoodItem {
  constructor(private repository: FoodItemRepository) {}

  execute(input: FoodItemInput): FoodItem {
    // Validate input using Zod
    const foodItem = FoodItemSchema.parse(input);

    // Add food item to the repository
    this.repository.add(foodItem);

    return foodItem;
  }
}
