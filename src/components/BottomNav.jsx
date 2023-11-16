import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Archive, Delete, Edit, Person2 } from '@mui/icons-material';
import { useState } from 'react';



export default function FixedBottomNavigation() {
  const [value, setValue] = useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ButNavActStyle = {
    borderRadius: '100px',
    padding: '4px 16px',
    backgroundColor: '#1769aa',
    transition: 'background-color 1s'
  };

  const ButNavActStyle1 = {
    borderRadius: '100px',
    color: 'white',
    padding: '4px 16px',
  };




  return (
    <Box sx={{ pb: 7 }}>
      <Paper sx={{ position: 'fixed', backgroundColor: '#111424', bottom: 0, left: 0, right: 0, }} elevation={3}>
        <BottomNavigation sx={{ margin: '10px', backgroundColor: '#111424' }} showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Notes"
            style={ButNavActStyle1}
            icon={<Link to="/" style={{ color: 'white' }}>
              <div style={ButNavActStyle}><Edit /></div>
            </Link>}
          />
          <BottomNavigationAction
            label="Archive" style={ButNavActStyle1}
            icon={<Link to="/archive" style={{ color: 'white' }}>
              <div style={ButNavActStyle}><Archive /></div>
            </Link>}
          />
          <BottomNavigationAction
            label="Delete" style={ButNavActStyle1}
            icon={<Link to="/delete" style={{ color: 'white' }}>
              <div style={ButNavActStyle}><Delete /></div>
            </Link>}
          />
          <BottomNavigationAction
            label="You" style={ButNavActStyle1}
            icon={<Link to="/you" style={{ color: 'white' }}>
              <div style={ButNavActStyle}><Person2 /></div>
            </Link>}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
