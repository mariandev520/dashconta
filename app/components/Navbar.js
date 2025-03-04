'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 transition-colors duration-300 font-roboto">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-gray-900 dark:text-red-500 text-2xl font-bold">
          Taller BM
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Inicio
            </Link>
          </li>
          
          <li>
            <Link href="/contacto" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Contacto
            </Link>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-gray-900" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
