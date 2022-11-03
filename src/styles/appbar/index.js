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
}));
