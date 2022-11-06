import React from 'react';
import { AppBarContainer, AppBarHeader, AppBarList } from '../../styles/appbar';
import { ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './Actions';

const IS_MOBILE = false;

export const AppbarDesktop = () => {
  return (
    <AppBarContainer>
      <AppBarHeader>My Bags</AppBarHeader>
      <AppBarList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </AppBarList>
      <Actions isMobile={IS_MOBILE} />
    </AppBarContainer>
  );
};
