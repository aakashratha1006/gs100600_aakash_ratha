import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ViewProvider } from './context/ViewContext';
import { Layout } from './components/Layout/Layout';

// Define theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // White navbar
    },
    secondary: {
      main: '#F8C1B0', // Coral color for buttons
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e0e0e0',
        },
        head: {
          fontWeight: 600,
          backgroundColor: '#ffffff',
        },
      },
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Adds consistent baseline styles */}
      <ViewProvider>
        <Layout />
      </ViewProvider>
    </ThemeProvider>
  );
}

export default App;