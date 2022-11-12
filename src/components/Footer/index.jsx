import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { FooterTitle, SubscribeTf } from '../../styles/footer';
import { Colors } from '../../styles/theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Stack } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';

export const Footer = () => {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' },
      }}
    >
      <Grid spacing={2} justifyContent="center" container>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero
            cumque culpa. Voluptatum nemo doloremque temporibus, quisquam
            maiores quis odio necessitatibus consectetur beatae delectus soluta
            animi porro quo nesciunt quas cumque asperiores, nobis molestiae vel
            ut exercitationem, dolores error ipsam? Quisquam quia quod
            voluptatibus possimus similique ab temporibus, praesentium alias?
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, mt: 4, color: Colors.dove_gray }}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </Box>
        </Grid>

        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>

          <List>
            <ListItemText>
              <Typography lineHeight={2}>About Us</Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2}>Order Tracking</Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2}>Private &amp; Policy </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2}>Term &amp; Conditions </Typography>
            </ListItemText>
          </List>
        </Grid>

        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>

        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">news letter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />

            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
