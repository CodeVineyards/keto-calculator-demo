import { FoodItem } from '@/src/entities/models/FoodItem';

export type FoodItemInput = Omit<FoodItem, 'id'>;
