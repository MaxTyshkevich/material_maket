import { ListItemIcon, ListItemButton, Divider } from '@mui/material';
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  AppBarList,
} from '../../styles/appbar/index';

import ShoppingCart from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

const styles = ({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  '& .MuiListItemIcon-root': {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Actions = ({ isMobile }) => {
  const Component = isMobile
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  return (
    <Component>
      <AppBarList type="row">
        <ListItemButton sx={styles}>
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
        </ListItemButton>

        <Divider orientation="vertical" flexItem />

        <ListItemButton sx={styles}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>

        <Divider orientation="vertical" flexItem />

        <ListItemButton sx={styles}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>

        <Divider orientation="vertical" flexItem />
      </AppBarList>
    </Component>
  );
};

export default Actions;
