import { Box, styled, Typography } from '@mui/material';
import { Colors } from '../theme';

export const PromotionContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    padding: '40px 0',
  },

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  overflow: 'hidden',
  padding: '20px 0',

  background: Colors.secondary,
}));

export const PromotionText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montez',

  color: Colors.dove_gray,
  fontSize: '1.5rem',

  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));
