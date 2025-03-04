'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Carousel = () => {
  const images = [
    '/images/iamges.jpeg',
    '/images/image1.jpeg',
    '/images/image2.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto mt-8 px-4 flex flex-col items-center">
      <div className="relative overflow-hidden w-auto">
        <div className="w-auto h-auto flex justify-center items-center">
          <Image
            src={images[currentIndex]}
            alt={`Carousel Image ${currentIndex + 1}`}
            width={1300}
            height={900}
            className="max-w-full max-h-[75vh] object-contain transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>

        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
        >
          &gt;
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-black scale-125' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;