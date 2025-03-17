import { FC, JSX } from 'react';
import { 
  Drawer, 
  List,
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  styled 
} from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useView } from '../../context/ViewContext';
import { ViewType } from '../../context/ViewContext';

const DRAWER_WIDTH = 240;

const StyledDrawer = styled(Drawer)({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRight: '1px solid #e0e0e0',
  },
});

interface MenuItem {
  id: ViewType;
  text: string;
  icon: JSX.Element;
}

const menuItems: MenuItem[] = [
  { id: 'store', text: 'Store', icon: <StorefrontIcon /> },
  { id: 'sku', text: 'SKU', icon: <InventoryIcon /> },
];

export const Sidebar: FC = () => {
  const { currentView, setCurrentView } = useView();

  return (
    <StyledDrawer variant="permanent">
      <List sx={{ marginTop: '64px' }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.id} 
            selected={currentView === item.id}
            onClick={() => setCurrentView(item.id)}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#e0e0e0',
              },
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
              my: 0.5,
              borderRadius: '4px',
              mx: 1,
            }}
          >
            <ListItemIcon 
              sx={{ 
                color: currentView === item.id ? 'black' : 'grey.600'
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text}
              sx={{ 
                color: currentView === item.id ? 'black' : 'grey.600'
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </StyledDrawer>
  );
};