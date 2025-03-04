import Navbar from '../app/components/Navbar';
import Hero from '../app/components/Hero';
import Footer from '../app/components/Footer';
import ArticleCard from '../app/components/ArticleCard';

const articles = [
  {
    title: 'Mantenimiento Preventivo',
    description: 'Realizamos mantenimiento preventivo para evitar futuros problemas con tu vehículo.',
    image: '/images/iamges.jpeg',
  },
  {
    title: 'Reparación de Motor',
    description: 'Especialistas en reparación de motores de todo tipo de vehículos.',
    image: '/images/image4.jpg',
  },
  {
    title: 'Diagnostico Digital',
    description: 'Servicio de alineación y balanceo para un mejor rendimiento de tus llantas.',
    image: '/images/diagnos.jpg',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}