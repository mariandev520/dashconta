import Carousel from './Carousel';
import AnimatedTitle from './AnimatedTitle';
import PromotionSection from './PromotionSection';
import { PhoneIcon } from '@heroicons/react/24/outline'; // Importa el icono de WhatsApp de Heroicons

const Hero = () => {
  const whatsappNumber = '+5492235286085';

  return (
    <div className="py-16 relative">
      <div className="mb-12">
        <AnimatedTitle />
      </div>
      <Carousel />
      <PromotionSection />

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <PhoneIcon className="w-6 h-6" /> {/* Usa el icono de Heroicons */}
      </a>
    </div>
  );
};

export default Hero;