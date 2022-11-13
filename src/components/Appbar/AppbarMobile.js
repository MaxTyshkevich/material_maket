import React from 'react';
import { AppBarContainer, AppBarHeader } from '../../styles/appbar';
import Actions from './Actions';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useUIContext } from '../../context/ui';
const IS_MOBILE = true;

export const AppbarMobile = () => {
  const { drawerOpen, setDrawerOpen } = useUIContext();
  return (
    <AppBarContainer>
      <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
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
