import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-earth-terracotta p-4 text-white dark:bg-darkMode-background">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-8 items-center">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Planer</h3>
            <div className="border-t border-white w-full mb-2"></div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline dark:text-darkMode-accent">Tagesplaner</a></li>
              <li><a href="#" className="hover:underline dark:text-darkMode-accent">Wochenplaner</a></li>
              <li><a href="#" className="hover:underline dark:text-darkMode-accent">Monatsplaner</a></li>
              <li><a href="#" className="hover:underline dark:text-darkMode-accent">Zielplaner</a></li>
            </ul>
          </div>
          <div className="border-l border-white h-full mx-4"></div> {/* Vertikale Trennlinie */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Reflexion</h3>
            <div className="border-t border-white w-full mb-2"></div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline dark:text-darkMode-accent">Gewohnheiten</a></li>
              <li><a href="#" className="hover:underline dark:text-darkMode-accent">Tagesreflexion</a></li>
              <li><a href="#" className="hover:underline dark:text-darkMode-accent">Wochenreflexion</a></li>
              <li><a href="#" className="hover:underline dark:text-darkMode-accent">Monatsreflexion</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
