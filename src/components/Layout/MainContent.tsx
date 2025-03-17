import { FC } from 'react';
import { Box } from '@mui/material';
import { useView } from '../../context/ViewContext';
import { StoreView } from '../Views/StoreView/StoreView';
import { SKUView } from '../Views/SKUView/SKUView';

export const MainContent: FC = () => {
  const { currentView } = useView();

  const renderView = () => {
    switch (currentView) {
      case 'store':
        return <StoreView />;
      case 'sku':
        return <SKUView />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {renderView()}
    </Box>
  );
};