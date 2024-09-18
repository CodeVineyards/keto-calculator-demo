// components/SearchAddFood.tsx
import { FoodDataItem, FoodItem } from '@/types'; // Ensure this is correctly imported
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';

interface ISearchAddFoodProps {
  foodData: FoodDataItem[];
  onAddFood: (foodItem: FoodItem) => void;
}

const SearchAddFood: React.FC<ISearchAddFoodProps> = ({
  foodData,
  onAddFood,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<FoodDataItem | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null); // Ref to keep track of the input field
  // Filter foods based on the search term
  const filteredFoods = foodData.filter((food) =>
    food.concatName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Open the menu without removing focus from the TextField
  const handleMenuOpen = () => {
    if (inputRef.current) {
      setMenuAnchor(inputRef.current);
    }
  };

  // Close the menu
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  // Select a food item and close the menu
  const handleSelectFood = (food: FoodDataItem) => {
    setSelectedItem(food);
    setAmount(0);
    setSearchTerm(food.concatName);
    handleMenuClose();
  };

  // Add the selected food to the list
  const handleAddFood = () => {
    if (selectedItem && amount > 0) {
      onAddFood({ ...selectedItem, amount });
      setSearchTerm('');
      setSelectedItem(null);
      setAmount(0);
      handleMenuClose();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
        mb: 4,
      }}
    >
      <TextField
        sx={{ flexGrow: 1 }}
        inputRef={inputRef}
        label="Search Food"
        variant="outlined"
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(e.target.value);
          handleMenuOpen(); // Open the menu while keeping focus on the input
        }}
      />

      <Menu
        disableAutoFocus
        disableEnforceFocus
        disableAutoFocusItem
        disablePortal
        MenuListProps={{ autoFocus: false }}
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor) && filteredFoods.length > 0}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: 200,
              width: `${inputRef.current?.clientWidth}`,
            },
          },
        }}
      >
        {filteredFoods.map((food) => (
          <MenuItem key={food.foodId} onClick={() => handleSelectFood(food)}>
            {food.concatName}
          </MenuItem>
        ))}
      </Menu>

      <TextField
        label="Amount (grams)"
        variant="outlined"
        type="number"
        placeholder={'0'}
        value={amount > 0 ? amount : ''}
        onFocus={(e) => (e.target.value = amount > 0 ? amount.toString() : '')}
        onChange={(e) => setAmount(Number(e.target.value))}
        sx={{ minWidth: 150, flexGrow: { xs: 1, md: 0 } }}
        disabled={!selectedItem}
      />
      <Button
        variant="contained"
        onClick={handleAddFood}
        disabled={!selectedItem || amount <= 0}
      >
        Add
      </Button>
    </Box>
  );
};

export default SearchAddFood;
