import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-earth-terracotta p-4 text-white dark:bg-darkMode-background">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-2">Planer</h3>
          <div className="border-t border-white w-full mb-2"></div>
          <ul className="flex flex-wrap justify-center w-full md:space-x-4">
            <li className="w-1/2 md:w-auto"><a href="#" className="hover:underline dark:text-darkMode-accent block text-center md:text-left">Tagesplaner</a></li>
            <li className="w-1/2 md:w-auto"><a href="#" className="hover:underline dark:text-darkMode-accent block text-center md:text-left">Wochenplaner</a></li>
            <li className="w-1/2 md:w-auto"><a href="#" className="hover:underline dark:text-darkMode-accent block text-center md:text-left">Monatsplaner</a></li>
            <li className="w-1/2 md:w-auto"><a href="#" className="hover:underline dark:text-darkMode-accent block text-center md:text-left">Zielplaner</a></li>
          </ul>
        </div>
        <div className="hidden md:block border-l border-white h-full mx-4"></div> {/* Vertikale Trennlinie */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-2">Reflexion</h3>
          <div className="border-t border-white w-full mb-2"></div>
          <ul className="flex flex-wrap justify-center w-full md:space-x-4">
            <li className="w-1/2 md:w-auto"><a href="#" className="hover:underline dark:text-darkMode-accent block text-center md:text-left">Gewohnheiten</a></li>
            <li className="w-1/2 md:w-auto"><a href="#" className="hover:underline dark:text-darkMode-accent block text-center md:text-left">Tagesreflexion</a></li>
            <li className="w-1/2 md:w-auto"><a href="#" className="hover:underline dark:text-darkMode-accent block text-center md:text-left">Wochenreflexion</a></li>
            <li className="w-1/2 md:w-auto"><a href="#" className="hover:underline dark:text-darkMode-accent block text-center md:text-left">Monatsreflexion</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
