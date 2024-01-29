  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import Paper from '@mui/material/Paper';
  import BottomNavigation from '@mui/material/BottomNavigation';
  import BottomNavigationAction from '@mui/material/BottomNavigationAction';
  import { Delete, Edit, Favorite, Person2 } from '@mui/icons-material';

  const NavigationItem = ({ to, label, icon }) => (
    <Link to={to} className="text-white">
      <div className="rounded-full bg-blue-500 py-1 px-4 ">
        {icon}
      </div>
    </Link>
  );

  const navigationItems = [
    { to: '/', label: 'Notes', icon: <Edit /> },
    { to: '/delete', label: 'Delete', icon: <Delete /> },
    { to: '/favourites', label: 'Favourites', icon: <Favorite /> },
    { to: '/you', label: 'You', icon: <Person2 /> },
  ];

  const FixedBottomNavigation = () => {
    const [value, setValue] = useState('0');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className="pb-7">
        <Paper className="dark:bg-gray-100 dark:text-gray-200 fixed bottom-0 left-0 right-0 bg-gray-800" elevation={3}>
          <BottomNavigation className="m-2 bg-gray-800"  value={value} onChange={handleChange}>
            {navigationItems.map((item, index) => (
              <BottomNavigationAction
                key={index}
                label={item.label}
                className="text-white"
                icon={<NavigationItem to={item.to}  icon={item.icon} />}
              />
            ))}
          </BottomNavigation>
        </Paper>
      </div>
    );
  };

  export default FixedBottomNavigation;
