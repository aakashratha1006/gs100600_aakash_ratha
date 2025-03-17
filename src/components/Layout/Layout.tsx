import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';

const DRAWER_WIDTH = 240;

const MainWrapper = styled(Box)({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#ffffff',
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  paddingLeft: 0, // Reduced left padding to move content closer to sidebar
  width: `calc(100% - ${DRAWER_WIDTH}px)`,
  // marginLeft: DRAWER_WIDTH,
  marginTop: 24,
  backgroundColor: '#f5f5f5',
  minHeight: 'calc(100vh - 64px)',
  overflowX: 'auto',
}));

export const Layout: FC = () => {
  return (
    <MainWrapper>
      <Navbar />
      <Sidebar />
      <ContentWrapper>
        <MainContent />
      </ContentWrapper>
    </MainWrapper>
  );
};