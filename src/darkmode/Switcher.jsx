import React, { useState } from 'react';
import useDarkSide from './DarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'dark' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className='text-gray-700! ' >
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={25} />
      </div>
    </>
  );
}