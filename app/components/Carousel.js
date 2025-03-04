'use client'; // Asegúrate de marcar este componente como del lado del cliente

import Image from 'next/image';

const Carousel = () => {
  // Rutas de las imágenes (asegúrate de que estén en la carpeta public/images/)
  const images = [
    '/images/iamages.jpeg', // Verifica que el nombre del archivo sea correcto
    '/images/image1.jpeg',
    '/images/image2.jpeg',
  ];

  return (
    <div className="carousel relative container mx-auto mt-8">
      <div className="carousel-inner relative overflow-hidden rounded-lg">
        {images.map((image, index) => ( // Corregido: usa "=>" en lugar de "2=>"
          <div key={index} className="carousel-item float-left w-full">
            <Image
              src={image}
              alt={`Car ${index + 1}`}
              width={1200}
              height={400}
              className="w-full h-96 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;