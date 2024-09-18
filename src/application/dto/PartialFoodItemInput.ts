import { FoodItem } from '@/src/entities/models/FoodItem';

export type PartialFoodItemInput = Partial<Omit<FoodItem, 'id'>>; // Allow partial updates, excluding 'id'
