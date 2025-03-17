import { createContext, useContext, useState, FC, ReactNode } from 'react';

// Define possible view types
export type ViewType = 'store' | 'sku';

// Define the shape of our context
interface ViewContextType {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  viewTitle: string;
}

// Create the context with undefined as initial value
const ViewContext = createContext<ViewContextType | undefined>(undefined);

// Props interface for the provider component
interface ViewProviderProps {
  children: ReactNode;
}

// View titles mapping
const VIEW_TITLES: Record<ViewType, string> = {
  store: 'Store Management',
  sku: 'SKU Management'
};

// Provider component
export const ViewProvider: FC<ViewProviderProps> = ({ children }) => {
  // Initialize with 'store' as the default view
  const [currentView, setCurrentView] = useState<ViewType>('store');

  // Compute the current view title
  const viewTitle = VIEW_TITLES[currentView];

  // Create the context value object
  const value = {
    currentView,
    setCurrentView,
    viewTitle
  };

  return (
    <ViewContext.Provider value={value}>
      {children}
    </ViewContext.Provider>
  );
};

// Custom hook to use the view context
export const useView = () => {
  const context = useContext(ViewContext);
  
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  
  return context;
};