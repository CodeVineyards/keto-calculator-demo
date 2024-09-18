import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

import { FoodItem } from '@/types'; // Import FoodItem type from your types file

// Define the props interface
interface IFoodItemListProps {
  foodItems: FoodItem[]; // Array of FoodItem
  onEditFood: (index: number) => void; // Function to handle editing a food item
  onRemoveFood: (index: number) => void; // Function to handle removing a food item
}

const FoodItemList: React.FC<IFoodItemListProps> = ({
  foodItems,
  onEditFood,
  onRemoveFood,
}) => {
  return (
    <List>
      {foodItems.map((item, index) => {
        const ketoRatio = item.fats / (item.carbs + item.protein);
        return (
          <Paper key={index} sx={{ my: '5px' }}>
            <ListItem
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => onEditFood(index)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onRemoveFood(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                sx={{ direction: 'rtl' }}
                primary={`${item.concatName} - ${item.amount}g`}
                secondary={`Calories: ${((item.calories * item.amount) / 100).toFixed(2)}, 
            Carbs: ${((item.carbs * item.amount) / 100).toFixed(2)}g, 
            Fats: ${((item.fats * item.amount) / 100).toFixed(2)}g, 
            Proteins: ${((item.protein * item.amount) / 100).toFixed(2)}g
            Keto Ratio: ${ketoRatio.toFixed(2)}`}
              />
            </ListItem>
          </Paper>
        );
      })}
    </List>
  );
};

export default FoodItemList;
