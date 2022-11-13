import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from '@mui/material';
import { lighten } from 'polished';
import React from 'react';
import { useUIContext } from '../../context/ui/index.jsx';
import { Colors } from '../../styles/theme';

const MiddleDivider = styled((props) => (
  <Divider
    variant="middle"
    {...props}
    sx={{ borderColor: lighten(0.2, Colors.primary) }}
  />
))``;

export const AppDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useUIContext();
  return (
    <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>

        <MiddleDivider />

        <ListItem>
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
        </ListItem>

        <MiddleDivider />

        <ListItem>
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
        </ListItem>

        <MiddleDivider />

        <ListItem>
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
        </ListItem>

        <MiddleDivider />

        <ListItem>
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
