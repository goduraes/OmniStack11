import React, { useEffect, useState } from 'react';

import './global.css';
import bat from './assets/bat.svg';
import Routes from './routes';

// JSX (JavaScript XML)
export default function App() {
  const themeSave = localStorage.getItem('theme');
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if(themeSave === 'dark'){
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme('dark');
    }
  }, [themeSave]);

  function themeChange() {
    const checkbox = document.getElementsByName('checkbox');
    if (checkbox[0].checked === true) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.removeItem('theme');
      document.documentElement.removeAttribute('data-theme');
      setTheme('');
    }
  }
  return (
    <div>
      <div className="theme-switch-wrapper">
        <label className="theme-switch">
          <input type="checkbox" checked={ (theme === 'dark') ? "checked" : '' } name="checkbox" onChange={themeChange} />
          <div className="slider round"></div>
        </label>
        <img src={bat} alt="bat logo" />
      </div>
      <Routes />
    </div>
  );
}
