import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { DataTable } from '../../Common/Table/DataTable';
import { storeData } from '../../../mockData/storeData';

const columns = [
  { id: 'id', label: 'S.No', minWidth: 70 },
  { id: 'store', label: 'Store', minWidth: 200 },
  { id: 'city', label: 'City', minWidth: 150 },
  { id: 'state', label: 'State', minWidth: 100 },
];

export const StoreView: FC = () => {
  return (
    <Box>
      <DataTable columns={columns} rows={storeData} />
      <Box sx={{ mt: 2, pl: 2 }}>
        <Button 
          variant="contained" 
          sx={{ 
            bgcolor: '#F8C1B0', 
            color: 'black',
            '&:hover': { bgcolor: '#e5b0a0' }
          }}
        >
          NEW STORE
        </Button>
      </Box>
    </Box>
  );
};