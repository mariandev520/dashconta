import Image from 'next/image';
import logo from './logo.png'; // Asegúrate de que la ruta sea correcta

const AnimatedTitle = () => {
  return (
    <div className="text-center py-10">
      <Image
        src={logo}
        alt="Taller BM Logo"
        width={500} // Ajusta el ancho según sea necesario
        height={200} // Ajusta la altura según sea necesario
        className="mx-auto" // Centra la imagen
      />
    </div>
  );
};

export default AnimatedTitle;