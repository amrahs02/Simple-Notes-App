

import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import NavList from './NavList';
import MenuIcon from '@mui/icons-material/Menu';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({ left: false });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return; }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <NavList />
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button >
            <MenuIcon
              style={{
                color: 'white',
                zIndex: '100000',
                margin: '15px'
              }}
              onClick={toggleDrawer('left', !state.left)}
            >
              {anchor}
            </MenuIcon>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
