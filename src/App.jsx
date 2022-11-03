import { ThemeProvider } from '@mui/material/styles';
import { Button, Container } from '@mui/material';
import { useEffect } from 'react';

import theme from './styles/theme';
import AppBar from './components/Appbar';

const App = () => {
  /*  const theme = useTheme();
   console.log(theme);
  */

  useEffect(() => {
    document.title = 'Material UI - Home';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>
        <AppBar />
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

        <Button variant="contained">Wello world</Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
