import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check for dark mode preference at the OS level
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    setDarkMode(isDarkMode);
  }, []);

  // Toggle dark mode
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const darkIcon = () => {
    if (darkMode) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      );
    }
  };

  return (
    <header className="flex">
      <h1 className="text-4xl py-4">Easy Split</h1>
      <span className="flex-grow"></span>
      <button type="button" onClick={handleDarkMode}>
        {darkIcon()}
      </button>
    </header>
  );
};

export default Header;
