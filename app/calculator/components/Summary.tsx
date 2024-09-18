// components/Summary.tsx
import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { FoodItem } from '@/app/types'; // Import the FoodItem type from your types file

// Define the props interface
interface ISummaryProps {
  foodItems: FoodItem[]; // Array of FoodItem
}

const Summary: React.FC<ISummaryProps> = ({ foodItems }) => {
  const totalCalories = foodItems.reduce(
    (acc, item) => acc + (item.calories * item.amount) / 100,
    0
  );
  const totalCarbs = foodItems.reduce(
    (acc, item) => acc + (item.carbs * item.amount) / 100,
    0
  );
  const totalFats = foodItems.reduce(
    (acc, item) => acc + (item.fats * item.amount) / 100,
    0
  );
  const totalProteins = foodItems.reduce(
    (acc, item) => acc + (item.protein * item.amount) / 100,
    0
  );
  const ketoRatio = totalFats / (totalCarbs + totalProteins);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Summary</Typography>
      <Typography>Calories: {totalCalories.toFixed(2)}</Typography>
      <Typography>Carbs: {totalCarbs.toFixed(2)}g</Typography>
      <Typography>Fats: {totalFats.toFixed(2)}g</Typography>
      <Typography>Proteins: {totalProteins.toFixed(2)}g</Typography>
      <Typography>
        Keto Ratio: {ketoRatio ? ketoRatio.toFixed(2) : ''}
      </Typography>
    </Box>
  );
};

export default Summary;
