import { FoodItem } from '@/src/entities/models/FoodItem';

export interface FoodItemRepository {
  add(foodItem: FoodItem): void;
  findById(id: string): FoodItem | null;
  update(foodItem: FoodItem): void;
  remove(id: string): void;
  getAll(): FoodItem[];
}
