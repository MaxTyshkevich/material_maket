import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { useEffect } from 'react';

import theme from './styles/theme';
import AppBar from './components/Appbar';
import { Banner } from './components/Banner';
import Promotion from './components/Promotion';
import Product from './components/Product';
import { Footer } from './components/Footer';
import { AppDrawer } from './components/Drawer';
import { UIProvider } from './context/ui/index.jsx';

const App = () => {
  useEffect(() => {
    document.title = 'Material UI - Home';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <Container maxWidth="xl" sx={{ background: '#fff' }}>
          <AppBar />
          <Banner />
          <Promotion />
          <Product />
          <Footer />
          <AppDrawer />
          {/* 
      AppBar
      banner
      Promotions
      title
      product
      footer
      searchbox
      appDrower
      */}
        </Container>
      </UIProvider>
    </ThemeProvider>
  );
};

export default App;
