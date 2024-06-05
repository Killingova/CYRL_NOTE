import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-earth-terracotta text-white p-6 dark:bg-darkMode-background">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center space-x-4">
          <li><a href="#" className="hover:underline dark:text-darkMode-accent">Über uns</a></li>
          <li><a href="#" className="hover:underline dark:text-darkMode-accent">Support</a></li>
          <li><a href="#" className="hover:underline dark:text-darkMode-accent">Copyright</a></li>
          <li><a href="#" className="hover:underline dark:text-darkMode-accent">Impressum</a></li>
          <li><a href="#" className="hover:underline dark:text-darkMode-accent">Nutzungsbedingungen</a></li>
          <li><a href="#" className="hover:underline dark:text-darkMode-accent">Datenschutz</a></li>
        </ul>
      </div>
    </footer>
  );
}
