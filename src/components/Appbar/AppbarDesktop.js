import React from 'react';
import { AppBarContainer, AppBarHeader, AppBarList } from '../../styles/appbar';
import { ListItemText } from '@mui/material';

export const AppbarDesktop = () => {
  /* 
  Appbar container 
  header
  list
*/

  return (
    <AppBarContainer>
      <AppBarHeader>My Bags</AppBarHeader>
      <AppBarList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
      </AppBarList>
    </AppBarContainer>
  );
};
