// src/components/Header.jsx
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="header">
      <h1 className="app-title">📝 TaskMaster</h1>
      <button onClick={() => setDarkMode((prev) => !prev)} className="theme-toggle">
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
};

export default Header;
