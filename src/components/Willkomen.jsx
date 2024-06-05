import React, { useState, useEffect } from 'react';

// Beispiel-Zitate-Array
const zitate = [
  "Der Weg ist das Ziel.",
  "Was immer du tun kannst oder träumst es zu können, fang damit an.",
  "Die beste Zeit, einen Baum zu pflanzen, war vor 20 Jahren. Die zweit beste Zeit ist jetzt."
];

export default function Willkommen({ isLoggedIn }) {
  const [zitat, setZitat] = useState('');

  useEffect(() => {
    // Wähle ein zufälliges Zitat aus dem Array
    setZitat(zitate[Math.floor(Math.random() * zitate.length)]);
  }, []);

  return (
    <div className="min-h-screen bg-pastel-blue dark:bg-darkMode-background text-gray-800 dark:text-darkMode-text p-8 flex flex-col items-center">
      {isLoggedIn ? (
        <>
          <h1 className="text-3xl font-bold text-center text-bold-green dark:text-darkMode-accent mb-6">
            ZITAT DES TAGES
          </h1>
          <p className="text-center mb-8 max-w-2xl">
            {zitat}
          </p>
          <div className="flex justify-around w-full max-w-4xl">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-5/12">
              <img src="/src/assets/Planer.jpg" alt="Planer" className="w-full h-auto rounded-full shadow-2xl object-cover" />
              <h2 className="text-2xl font-semibold mb-4 text-bold-green dark:text-darkMode-accent">
                Planer <span className="text-earth-terracotta">Archiv</span>
              </h2>
              <ul className="list-disc list-inside">
                <li><a href="#" className="hover:underline dark:text-darkMode-accent">Tagesplaner</a></li>
                <li><a href="#" className="hover:underline dark:text-darkMode-accent">Wochenplaner</a></li>
                <li><a href="#" className="hover:underline dark:text-darkMode-accent">Monatsplaner</a></li>
                <li><a href="#" className="hover:underline dark:text-darkMode-accent">Zielplaner</a></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-5/12">
              <img src="/src/assets/Reflexion.jpg" alt="Reflexion" className="w-full h-auto rounded-full shadow-2xl object-cover" />
              <h2 className="text-2xl font-semibold mb-4 text-bold-green dark:text-darkMode-accent">
                Reflexion <span className="text-earth-terracotta">Time</span>
              </h2>
              <ul className="list-disc list-inside">
                <li><a href="#" className="hover:underline dark:text-darkMode-accent">Gewohnheiten</a></li>
                <li><a href="#" className="hover:underline dark:text-darkMode-accent">Tagesreflexion</a></li>
                <li><a href="#" className="hover:underline dark:text-darkMode-accent">Wochenreflexion</a></li>
                <li><a href="#" className="hover:underline dark:text-darkMode-accent">Monatsreflexion</a></li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center text-bold-green dark:text-darkMode-accent mb-6">
            Willkommen bei CYRL NOTE
          </h1>
          <p className="text-center mb-8 max-w-2xl">
            CYRL Note ist Ihre ideale App für effiziente Planung und Selbstreflexion. Finden Sie Struktur und Inspiration für Ihre täglichen, wöchentlichen und monatlichen Ziele.
          </p>
          <div className="flex justify-around w-full max-w-4xl">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-5/12">
              <img src="/src/assets/Planer.jpg" alt="Planer" className="w-full h-auto rounded-full shadow-2xl object-cover" />
              <h2 className="text-2xl font-semibold mb-4 text-bold-green dark:text-darkMode-accent">Planer</h2>
              <ul className="list-inside">
                <li>Tagesplaner</li>
                <li>Wochenplaner</li>
                <li>Monatsplaner</li>
                <li>Zielplaner</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-5/12">
              <img src="/src/assets/Reflexion.jpg" alt="Reflexion" className="w-full h-auto rounded-full shadow-2xl object-cover" />
              <h2 className="text-2xl font-semibold mb-4 text-bold-green dark:text-darkMode-accent">Reflexion</h2>
              <ul className="list-inside">
                <li>Gewohnheiten</li>
                <li>Tagesreflexion</li>
                <li>Wochenreflexion</li>
                <li>Monatsreflexion</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
