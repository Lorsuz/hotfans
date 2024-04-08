import React from 'react';
import { useTheme } from './../../context/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme (Currently {theme})
    </button>
  );
}

export default ThemeSwitcher;
