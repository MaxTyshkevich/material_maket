import React from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  BannerContainer,
  BannerContent,
  BannerDiscription,
  BannerTittle,
  BannerImage,
} from '../../styles/baner';

export const Banner = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer>
      <BannerImage src={'/images/banner/banner.png'} />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTittle variant="h2 ">New Bags</BannerTittle>
        <BannerDiscription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          maiores iure deserunt sunt vel, et doloribus quibusdam, voluptas qui
          dolor sequi, perferendis numquam assumenda porro veniam eligendi quis
          a. Libero!
        </BannerDiscription>
      </BannerContent>
    </BannerContainer>
  );
};
