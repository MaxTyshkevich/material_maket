import React from 'react';
import { Typography } from '@mui/material';
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTittle,
  BannerImage,
  BannerShopButton,
} from '../../styles/baner';

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src={'/images/banner/banner.png'} />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTittle variant="h2 ">New Bags</BannerTittle>
        <BannerDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          maiores iure deserunt sunt vel, et doloribus quibusdam, voluptas qui
          dolor sequi, perferendis numquam assumenda porro veniam eligendi quis
          a. Libero!
        </BannerDescription>
        <BannerShopButton color="primary">Shop now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
};
