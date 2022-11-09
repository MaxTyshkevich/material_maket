import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import {
  ActionButtons,
  Image,
  ProductAddToCard,
  ProductCard,
  ProductCardActions,
  ProductCardContent,
} from '../../styles/product';
import { Stack } from '@mui/material';

export const SingleProduct = ({ item, isMobile }) => {
  const [hoverCard, setHoverCard] = useState(false);

  const handleEnter = () => {
    setHoverCard(true);
  };
  const handleLeave = () => {
    setHoverCard(false);
  };
  return (
    <ProductCard raised onPointerEnter={handleEnter} onMouseLeave={handleLeave}>
      <Image component="img" image={item.image} alt={item.name} />
      <ProductCardContent>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          color="text.secondary"
          sx={{ whiteSpace: 'nowrap' }}
        >
          {item.name}
        </Typography>
        <Typography
          variant={isMobile ? 'caption' : 'body1'}
          color="text.secondary"
        >
          {item.price}
        </Typography>
        <Typography
          variant={isMobile ? 'caption' : 'body1'}
          color="text.secondary"
        >
          {item.description}
        </Typography>
      </ProductCardContent>
      <ProductCardActions disableSpacing show={hoverCard}>
        <Stack direction={isMobile ? 'row' : 'column'}>
          <ActionButtons aria-label="add to favorites" isFav={1}>
            <FavoriteIcon />
          </ActionButtons>
          <ActionButtons aria-label="share">
            <ShareIcon color="primary" />
          </ActionButtons>
          <ActionButtons aria-label="FitScreen">
            <FitScreenIcon />
          </ActionButtons>
        </Stack>
      </ProductCardActions>
      <ProductAddToCard show={hoverCard} variant="contained">
        Add to card
      </ProductAddToCard>
    </ProductCard>
  );
};
