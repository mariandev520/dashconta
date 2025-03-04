import Image from 'next/image';

const ArticleCard = ({ title, description, image }) => {
  return (
    <div className="rounded-lg shadow-md bg-black transition-transform duration-300 hover:scale-105 m-4"> {/* Agregamos margen y efecto hover */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-t-lg" // Añadimos rounded-t-lg
      />
      <div className="p-6"> {/* Aumentamos el padding */}
        <div className="font-semibold text-2xl mb-3">{title}</div> {/* Título mejorado */}
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;