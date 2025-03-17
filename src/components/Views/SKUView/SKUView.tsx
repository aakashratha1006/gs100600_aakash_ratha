import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { DataTable } from '../../Common/Table/DataTable';
import { skuData } from '../../../mockData/skuData';

const columns = [
  { id: 'sku', label: 'SKU', minWidth: 200 },
  { 
    id: 'price', 
    label: 'Price', 
    minWidth: 100,
    format: (value: number) => `$ ${value.toFixed(2)}`
  },
  { 
    id: 'cost', 
    label: 'Cost', 
    minWidth: 100,
    format: (value: number) => `$ ${value.toFixed(2)}`
  },
];

export const SKUView: FC = () => {
  return (
    <Box>
      <DataTable columns={columns} rows={skuData} />
      <Box sx={{ mt: 2, pl: 2 }}>
        <Button 
          variant="contained" 
          sx={{ 
            bgcolor: '#F8C1B0', 
            color: 'black',
            '&:hover': { bgcolor: '#e5b0a0' }
          }}
        >
          NEW SKU
        </Button>
      </Box>
    </Box>
  );
};