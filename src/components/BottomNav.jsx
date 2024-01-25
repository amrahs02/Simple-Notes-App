import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Delete, Edit, Favorite, Person2 } from '@mui/icons-material';
import { useState } from 'react';

export default function FixedBottomNavigation() {
  const [value, setValue] = useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="pb-7">
      <Paper className="fixed bottom-0 left-0 right-0 bg-gray-800" elevation={3}>
        <BottomNavigation className="m-2 bg-gray-800" showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Notes"
            className="text-white"
            icon={
              <Link to="/" className="text-white">
                <div className="rounded-full bg-blue-500 py-1 px-4 md:p-4 transition duration-1000">
                  <Edit />
                </div>
              </Link>
            }
          />

          <BottomNavigationAction
            label="Delete"
            className="text-white"
            icon={
              <Link to="/delete" className="text-white">
                <div className="rounded-full bg-blue-500 py-1 px-4 md:p-4 transition duration-1000">
                  <Delete />
                </div>
              </Link>
            }
          />

          <BottomNavigationAction
            label="Favourites"
            className="text-white"
            icon={
              <Link to="/favourites" className="text-white">
                <div className="rounded-full bg-blue-500 py-1 px-4 md:p-4 transition duration-1000">
                  <Favorite />
                </div>
              </Link>
            }
          />
          <BottomNavigationAction
            label="You"
            className="text-white"
            icon={
              <Link to="/you" className="text-white">
                <div className="rounded-full bg-blue-500 py-1 px-4 md:p-4 transition duration-1000">
                  <Person2 />
                </div>
              </Link>
            }
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}
