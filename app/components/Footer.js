import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contacto</h3>
            <p>Av. M. Champagnat 2874, B7600 Mar del Plata, Provincia de Buenos Aires</p>
            <p>Teléfono: +223286085</p>
            <p></p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors duration-300">Inicio</Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-cyan-400 transition-colors duration-300">Servicios</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-cyan-400 transition-colors duration-300">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Taller Mecánico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;