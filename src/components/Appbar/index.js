import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import { AppbarDesktop } from './AppbarDesktop';
import { AppbarMobile } from './AppbarMobile';

const Appbar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return <>{mobile ? <AppbarMobile /> : <AppbarDesktop />}</>;
};

export default Appbar;
