import { PartialFoodItemInput } from '@/src/application/dto/PartialFoodItemInput';
import { FoodItemRepository } from '@/src/application/repositories/FoodItemRepository';

import { FoodItemSchema } from '@/src/entities/models/FoodItem';

export class EditFoodItem {
  constructor(private repository: FoodItemRepository) {}

  execute(id: string, updatedData: PartialFoodItemInput): void {
    const existingFoodItem = this.repository.findById(id);

    if (!existingFoodItem) {
      throw new Error('Food item not found');
    }

    // Validate updated data
    const updatedFoodItem = FoodItemSchema.parse({
      ...existingFoodItem,
      ...updatedData,
    });

    // Update the item in the repository
    this.repository.update(updatedFoodItem);
  }
}
