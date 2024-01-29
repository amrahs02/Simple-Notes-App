  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import BottomNavigationAction from '@mui/material/BottomNavigationAction';
  import { Delete, Edit, Favorite, Person2 } from '@mui/icons-material';

  const NavigationItem = ({ to, label, icon }) => (
    <Link to={to} className="text-white hover:text-black  ">
      <div className="rounded-full w-full bg-blue-500 py-1 px-4 ">
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
      <div className="pb-1">
        <div className=" dark:text-gray-200 fixed bottom-0  left-0 right-0 dark:bg-white bg-pink-500! w-full" elevation={5}>
          <div className="flex justify-evenly items-center w-full bg-gray-700 dark:bg-gray-300 " value={value} onChange={handleChange}>
            {navigationItems.map((item, index) => (
              <BottomNavigationAction 
                key={index}
                label={item.label}
                className="text-white! "
                icon={<NavigationItem to={item.to}  icon={item.icon} />}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default FixedBottomNavigation;
