import { FoodItemRepository } from '@/src/application/repositories/FoodItemRepository';

export class RemoveFoodItem {
  constructor(private repository: FoodItemRepository) {}

  execute(id: string): void {
    const foodItem = this.repository.findById(id);

    if (!foodItem) {
      throw new Error('Food item not found');
    }

    // Remove the item from the repository
    this.repository.remove(id);
  }
}
