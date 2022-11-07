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
  fontSize: 72,
  letterSpacing: 1.5,
  [theme.breakpoints.down('md')]: {
    fontSize: 42,
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: '3em',
  [theme.breakpoints.down('sm')]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: '1.5em',
  },
}));

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
