'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FoodItemList from './components/FoodItemList';
import SearchAddFood from './components/SearchAddFood';
import Summary from './components/Summary';

import foodData from '@/app/foods'; // Adjust the path according to your project structure
import { FoodItem } from '@/app/types'; // Adjust the path to your types file

const CalculatorPage: React.FC = () => {
  // Define state with FoodItem type
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  // Handle adding a food item
  const handleAddFood = (foodItem: FoodItem) => {
    setFoodItems([...foodItems, foodItem]);
  };

  // Handle removing a food item
  const handleRemoveFood = (index: number) => {
    setFoodItems(foodItems.filter((_, i) => i !== index));
  };

  // Handle editing a food item
  const handleEditFood = (index: number) => {
    // Implement edit functionality here
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component={'h1'} gutterBottom>
        Keto Calculator
      </Typography>

      {/* Search and Add Food Component */}
      <SearchAddFood foodData={foodData} onAddFood={handleAddFood} />

      {/* Food Item List Component */}
      <FoodItemList
        foodItems={foodItems}
        onEditFood={handleEditFood}
        onRemoveFood={handleRemoveFood}
      />

      {/* Summary Component */}
      <Summary foodItems={foodItems} />
    </Box>
  );
};

export default CalculatorPage;
