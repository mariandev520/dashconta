import Carousel from './Carousel';
import AnimatedTitle from './AnimatedTitle';
import PromotionSection from './PromotionSection';

const Hero = () => {
  const whatsappNumber = '+5491160325056'; // Reemplaza con tu número de WhatsApp

  return (
    <div className="py-16 relative"> {/* Añadimos 'relative' */}
      <div className="mb-12">
        <AnimatedTitle />
      </div>
      <Carousel />
      <PromotionSection />

      {/* Botón de WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12.315 2.174a10.69 10.69 0 018.24 3.326c.553.475.927.962.927 1.474 0 2.973-2.158 5.44-5.074 5.44-8.24 0-4.52-2.92-8.24-5.44-8.24-2.973 0-5.44 2.158-5.44 5.074 0 3.116 2.513 5.334 5.613 5.334.343 0 .678-.027 1-.074a3.94 3.94 0 003.882-3.238c.026-.152.04-.311.04-.473 0-.324-.097-.626-.26-.882-.257-.261.004-.507.123-.675.315-.17.192-.262.433-.262.685 0 .39.217.746.588.895.395.161.855.127 1.177-.074a.891.891 0 01.782-.281c.088-.006.173-.031.253-.074a1.852 1.852 0 001.244-2.474 1.852 1.852 0 00-2.474 1.244c-.035.044-.06.095-.074.152a.891.891 0 01-.281.782c-.2.273.837-3.262 2.87-2.424 5.143a4.01 4.01 0 001.074 3.882c.047.322.074.657.074 1 0 3.317-2.41 6.031-5.613 6.031-3.183 0-5.874-2.613-5.874-5.827 0-3.213 2.69-5.827 5.874-5.827 3.183 0 5.874 2.613 5.874 5.827 0 1.252-.497 2.407-1.34 3.334-.844.927-1.927 1.34-3.04 1.34z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default Hero;