import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Willkommen from './components/Willkomen.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Navbar from './components/Notesidebar.jsx';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginClick = () => {
    setShowLogin(true);
    setErrorMessage('');
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleLogin = (username, password) => {
    if (username && password.length >= 6) {
      setIsLoggedIn(true);
      setUsername(username);
      setShowLogin(false);
    } else {
      setErrorMessage('Benutzername oder Passwort ist ungültig.');
    }
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      <Header
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogoutClick}
        isLoggedIn={isLoggedIn}
        username={username}
      />
      {showLogin && <Login onClose={handleCloseLogin} onLogin={handleLogin} />}
      {isLoggedIn && <Navbar />}
      <Willkommen isLoggedIn={isLoggedIn} />
      <Footer />
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
    </>
  );
}

export default App;
