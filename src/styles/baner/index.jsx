import { Box, styled, Typography, List } from '@mui/material';
import { Colors } from '../theme';

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',

  width: '100%',
  height: '100%',

  background: Colors.light_gray,
  padding: '0px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const BannerContent = styled(Box)((...props) => {
  console.log(props);
  return {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '420px',
    padding: '30px',
  };
});

export const BannerTittle = styled(Box)(({ theme }) => ({
  fontSize: 70,
  [theme.breakpoints.down('md')]: {
    fontSize: 48,
  },
}));

export const BannerDiscription = styled(Typography)(({ theme }) => ({}));

export const BannerImage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: '500px',

  [theme.breakpoints.down('md')]: {
    width: '350px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '320px',
    height: '300px',
  },
}));
