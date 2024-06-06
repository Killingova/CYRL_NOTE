import React, { useState, useRef } from 'react';
import Header from './components/Header.jsx';
import Willkommen from './components/Willkomen.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Navbar from './components/Notesidebar.jsx';
import NewTagesplaner from './components/NewTagesplan.jsx';

const SCREEN = {
  WELCOME: 'welcome',
  LOGIN: 'login',
  NEW_TAGESPLANER: 'new_tagesplaner',
};

function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREEN.WELCOME);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const loginDialog = useRef(null);

  const handleLoginClick = () => {
    loginDialog.current.showModal();
    setErrorMessage('');
  };

  const handleCloseLogin = () => {
    loginDialog.current.close();
    setCurrentScreen(SCREEN.WELCOME);
  };

  const handleLogin = (username, password) => {
    if (username && password.length >= 6) {
      setIsLoggedIn(true);
      setUsername(username);
      loginDialog.current.close();
      setCurrentScreen(SCREEN.WELCOME);
    } else {
      setErrorMessage('Benutzername oder Passwort ist ungültig.');
    }
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setUsername('');
    setCurrentScreen(SCREEN.WELCOME);
  };

  const handleTagesplanerClick = () => {
    setCurrentScreen(SCREEN.NEW_TAGESPLANER);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogoutClick}
        isLoggedIn={isLoggedIn}
        username={username}
      />
      <main className="flex-grow">
        {isLoggedIn && <Navbar onTagesplanerClick={handleTagesplanerClick} />}
        {currentScreen === SCREEN.WELCOME && <Willkommen isLoggedIn={isLoggedIn} />}
        {currentScreen === SCREEN.NEW_TAGESPLANER && <NewTagesplaner onCancel={() => setCurrentScreen(SCREEN.WELCOME)} />}
      </main>
      <Footer />
      <dialog ref={loginDialog}>
        <Login onClose={handleCloseLogin} onLogin={handleLogin} />
        {errorMessage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
              <p>{errorMessage}</p>
              <button onClick={() => setErrorMessage('')} className="mt-4 bg-bold-green text-white px-4 py-2 rounded">
                Schließen
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

export default App;
