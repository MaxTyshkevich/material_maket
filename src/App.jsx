import { Button, Container } from '@mui/material';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    window.document.title = 'Material UI - Home';
  }, []);

  return (
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <Button>Wello world</Button>

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
  );
};

export default App;
