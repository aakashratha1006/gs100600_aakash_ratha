import { FC } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  IconButton 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  format?: (value: number) => string;
}

interface DataTableProps {
  columns: Column[];
  rows: any[];
}

export const DataTable: FC<DataTableProps> = ({ columns, rows }) => {
  return (
    <TableContainer 
      component={Paper} 
      sx={{ 
        maxHeight: 'calc(100vh - 200px)',
        backgroundColor: '#ffffff', // White background for table
        borderRadius: '0',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        ml: 0, // Remove left margin
        borderLeft: 0, // Remove left border if any
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell 
              style={{ 
                width: 100,
                backgroundColor: '#ffffff' // White background for header
              }}
            >
            </TableCell>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                style={{ 
                  minWidth: column.minWidth,
                  backgroundColor: '#ffffff' // White background for header
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
              hover 
              key={row.id}
              sx={{
                '&:hover': {
                  backgroundColor: '#f8f8f8' // Light hover effect
                }
              }}
            >
              <TableCell>
                <IconButton size="small">
                  <DeleteIcon />
                </IconButton>
                <IconButton size="small">
                  <DragIndicatorIcon />
                </IconButton>
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {column.format
                    ? column.format(row[column.id])
                    : row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};