import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { AppBarContainer, AppBarHeader, AppBarList } from '../../styles/appbar';
import Actions from './Actions';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const IS_MOBILE = true;

export const AppbarMobile = () => {
  return (
    <AppBarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>

      <AppBarHeader align="center" variant="h4">
        My Bags
      </AppBarHeader>

      <IconButton>
        <SearchIcon />
      </IconButton>

      <Actions isMobile={IS_MOBILE} />
    </AppBarContainer>
  );
};
