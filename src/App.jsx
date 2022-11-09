import { ThemeProvider } from '@mui/material/styles';
import { Button, Container } from '@mui/material';
import { useEffect } from 'react';

import theme from './styles/theme';
import AppBar from './components/Appbar';
import { Banner } from './components/Banner';
import Promotion from './components/Promotion';
import Product from './components/Product';

const App = () => {
  useEffect(() => {
    document.title = 'Material UI - Home';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>
        <AppBar />
        <Banner />
        <Promotion />
        <Product />
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
    </ThemeProvider>
  );
};

export default App;
