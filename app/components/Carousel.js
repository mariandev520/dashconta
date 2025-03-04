import Image from 'next/image';

const Carousel = () => {
  const images = [
    '/images/car1.jpg',
    '/images/car2.jpg',
    '/images/car3.jpg',
  ];

  return (
    <div className="carousel relative container mx-auto mt-8">
      <div className="carousel-inner relative overflow-hidden rounded-lg">
        {images.map((image, index) => (
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