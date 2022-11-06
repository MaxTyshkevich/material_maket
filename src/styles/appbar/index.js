import { Box, styled, Typography, List } from '@mui/material';
import { Colors } from '../theme';
import '@fontsource/montez';

export const AppBarContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px',
}));

export const AppBarHeader = styled(Typography)(() => ({
  textAlign: 'center',
  padding: '4px',
  flexGrow: 1,
  fontSize: '4rem',
  fontFamily: '"Montez" , "cursive"',
  color: Colors.secondary,
}));

export const AppBarList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '20px',
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
  '& .MuiSvgIcon-root': {
    color: Colors.secondary,
  },
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
