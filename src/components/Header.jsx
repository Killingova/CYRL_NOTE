import React, { forwardRef } from 'react';

const Header = forwardRef(({ onLoginClick, onLogoutClick, isLoggedIn, username }, ref) => {
  return (
    <header ref={ref} className="bg-earth-terracotta p-4 dark:bg-darkMode-background">
      <div className="flex items-center justify-between">
        <div>
          <img src="/public/Logo1.png" alt="Logo" className="h-12 w-12" />
        </div>
        <div className="flex items-center">
          <div className="text-white text-xl font-semibold mr-4">
            {isLoggedIn ? `CYRL NOTE ${username}` : 'CREATE YOUR REAL LIFE'}
          </div>
          <button
            className="bg-bold-green text-white px-4 py-2 rounded hover:bg-bold-blue dark:bg-darkMode-accent dark:hover:bg-darkMode-text"
            onClick={isLoggedIn ? onLogoutClick : onLoginClick}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
    </header>
  );
});

export default Header;
