import React from 'react';

export default function Willkommen() {
  return (
    <div className="min-h-screen bg-pastel-blue dark:bg-darkMode-background text-gray-800 dark:text-darkMode-text p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-earth-terracotta dark:text-darkMode-accent mb-6">
        Willkommen bei CYRL NOTE
      </h1>
      <p className="text-center mb-8 max-w-2xl">
        CYRL Note ist Ihre ideale App für effiziente Planung und Selbstreflexion. Finden Sie Struktur und Inspiration für Ihre täglichen, wöchentlichen und monatlichen Ziele.
      </p>
      <div className="flex justify-around w-full max-w-4xl">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-5/12">
          <img src="/src/assets/Planer.jpg" alt="Planer" className="w-full h-auto rounded-full shadow-2xl object-cover" />
          <h2 className="text-2xl font-semibold mb-4 text-bold-green dark:text-darkMode-accent">Planer</h2>
          <ul className="list-disc list-inside">
            <li>Tagesplaner</li>
            <li>Wochenplaner</li>
            <li>Monatsplaner</li>
            <li>Zielplaner</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-5/12">
          <img src="/src/assets/Reflexion.jpg" alt="Reflexion" className="w-full h-auto rounded-full shadow-2xl object-cover" />
          <h2 className="text-2xl font-semibold mb-4 text-bold-green dark:text-darkMode-accent">Reflexion</h2>
          <ul className="list-disc list-inside">
            <li>Gewohnheiten</li>
            <li>Tagesreflexion</li>
            <li>Wochenreflexion</li>
            <li>Monatsreflexion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
