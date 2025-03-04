'use client'; // <-- Agrega esto al principio

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Taller Mecánico
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-400">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="text-white hover:text-gray-400">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="text-white hover:text-gray-400">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;