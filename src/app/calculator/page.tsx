'use client';
import { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import foodData from '@/foods'; // Adjust the path according to your project structure

const CalculatorPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [amount, setAmount] = useState(0);

  // Filter foods based on search term
  const filteredFoods = foodData.filter((food) =>
    food.concatName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle adding a food item
  const handleAddFood = () => {
    if (selectedItem && amount > 0) {
      setFoodItems([...foodItems, { ...selectedItem, amount }]);
      setSearchTerm('');
      setSelectedItem(null);
      setAmount(0);
    }
  };

  // Handle removing a food item
  const handleRemoveFood = (index) => {
    setFoodItems(foodItems.filter((_, i) => i !== index));
  };

  // Example summary calculations
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
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Keto Calculator
      </Typography>

      {/* Search/Add Food Section */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          label="Search Food"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setSelectedItem(null)} // Clear selection when starting a new search
        />

        {/* Display filtered search results */}
        {searchTerm && (
          <Box
            sx={{
              maxHeight: 200,
              overflowY: 'auto',
              border: '1px solid #ddd',
              mt: 1,
            }}
          >
            {filteredFoods.map((food) => (
              <Box
                key={food.foodId}
                sx={{
                  padding: 1,
                  cursor: 'pointer',
                  borderBottom: '1px solid #eee',
                }}
                onClick={() => {
                  setSelectedItem(food);
                  setAmount(food.avgUnitSize || 100); // Set default amount based on avgUnitSize or 100g
                  setSearchTerm(food.concatName);
                }}
              >
                {food.concatName}
              </Box>
            ))}
          </Box>
        )}

        <TextField
          label="Amount (grams)"
          variant="outlined"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          sx={{ width: 150 }}
          disabled={!selectedItem} // Disable if no food is selected
        />
        <Button
          variant="contained"
          onClick={handleAddFood}
          disabled={!selectedItem || amount <= 0}
        >
          Add
        </Button>
      </Box>

      {/* Food Item List */}
      <List>
        {foodItems.map((item, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleEditFood(index)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleRemoveFood(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText
              sx={{ direction: 'rtl' }}
              primary={`${item.concatName} - ${item.amount}g`}
              secondary={`Calories: ${(item.calories * item.amount) / 100}, Carbs: ${
                (item.carbs * item.amount) / 100
              }g, Fats: ${(item.fats * item.amount) / 100}g, Proteins: ${
                (item.protein * item.amount) / 100
              }g`}
            />
          </ListItem>
        ))}
      </List>

      {/* Summary Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Summary</Typography>
        <Typography>Calories: {totalCalories.toFixed(2)}</Typography>
        <Typography>Carbs: {totalCarbs.toFixed(2)}g</Typography>
        <Typography>Fats: {totalFats.toFixed(2)}g</Typography>
        <Typography>Proteins: {totalProteins.toFixed(2)}g</Typography>
        <Typography>Keto Ratio: {ketoRatio.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
};

export default CalculatorPage;
