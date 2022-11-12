import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { products } from '../../data';
import { SingleProduct } from './SingleProduct';

const Product = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [goods, setGoods] = useState(products);

  return (
    <Box sx={{ marginTop: '40px', marginBottom: '40px' }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        sx={{ marginBottom: '10px' }}
      >
        Our product
      </Typography>
      <Grid
        container
        spacing={[2, 3, 4, 5]}
        /* columns={{ xs: 4, sm: 8, md: 12 }} */
        justifyContent="center"
        alignItems="center"
      >
        {goods.map((item) => (
          <Grid key={item.id} item xs={8} sm={5} md={4} xl={3}>
            <SingleProduct isMobile={isMobile} item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;
