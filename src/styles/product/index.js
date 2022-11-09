import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  styled,
} from '@mui/material';
import { slideInBottom, slideInRight } from '../../animation';
import { Colors } from '../theme';

export const Image = styled(CardMedia)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    width: '80%',
    margin: 'auto',
  },
  background: Colors.light_gray,
  height: '200px',
}));

export const ProductIcon = styled(IconButton)(() => ({
  color: Colors.white,
  margin: 4,
}));

export const ActionButtons = styled(ProductIcon, {
  shouldForwardProp: (props) => props !== 'isFav',
})(({ isFav, theme }) => ({
  color: isFav ? Colors.primary : Colors.dim_grey,
  /*  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    top: 0,
    right: 0,
  }, */
}));

export const ProductCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '1rem',
}));

export const ProductCardContent = styled(CardContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
  padding: '1em',
}));

export const ProductCardActions = styled(CardActions, {
  shouldForwardProp: (props) => props !== 'show',
})(({ theme, show }) => ({
  flexWrap: 'wrap',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    display: show ? 'flex' : 'none',
    flexDirection: 'column',
    position: 'absolute',
    right: 0,
    top: '20%',
    animation:
      show && `${slideInRight} 0.5s cubic-bezier(0.250,0.460,0.450,0.940) both`,
  },
}));

export const ProductAddToCard = styled(Button, {
  shouldForwardProp: (props) => props !== 'show',
})(({ show, theme }) => ({
  width: '120px',
  fontSize: '12px',
  [theme.breakpoints.up('md')]: {
    display: show ? 'block' : 'none',
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: '10px 5px',
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250,0.460,0.450,0.940) both`,
  },

  background: Colors.secondary,
  opacity: 0.9,
}));
