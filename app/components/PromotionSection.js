'use client'; // Asegúrate de marcar este componente como del lado del cliente

import Image from 'next/image';

const PromotionSection = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Decorative background image and gradient */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
          <Image
            src="https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Taller Mecánico"
            width={2074}
            height={1383}
            className="h-full w-full object-cover object-center"
            priority // Prioriza la carga de esta imagen
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black"></div>
      </div>

      {/* Callout */}
      <section
        aria-labelledby="sale-heading"
        className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2
            id="sale-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            La importancia de los cambios de aceite y filtro en tu vehículo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-gray-300">
            Mantén tu motor funcionando al máximo rendimiento. Un cambio de aceite y filtro regular puede prevenir costosas reparaciones y prolongar la vida útil de tu vehículo.
          </p>
          <a
            href="/servicios/cambio-aceite"
            className="mt-6 inline-block w-full rounded-md border border-transparent bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 sm:w-auto"
          >
            Agenda tu servicio hoy
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="testimonial-heading"
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2
            id="testimonial-heading"
            className="text-2xl font-bold tracking-tight text-white"
          >
            ¿Qué dicen nuestros clientes?
          </h2>

          <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            <blockquote className="sm:flex lg:block">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                aria-hidden="true"
                className="flex-shrink-0 text-gray-500"
              >
                <path
                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                  fill="currentColor"
                />
              </svg>
              <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                <p className="text-lg text-gray-300">
                  &quot;El servicio de cambio de aceite fue rápido y eficiente. ¡Mi coche se siente como nuevo!&quot;
                </p>
                <cite className="mt-4 block font-semibold not-italic text-white">
                  Carlos
                </cite>
              </div>
            </blockquote>
            <blockquote className="sm:flex lg:block">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                aria-hidden="true"
                className="flex-shrink-0 text-gray-500"
              >
                <path
                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                  fill="currentColor"
                />
              </svg>
              <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                <p className="text-lg text-gray-300">
                  &quot;Excelente atención y servicio. Mi coche necesitaba un cambio de filtro urgente y lo solucionaron rápidamente.&quot;
                </p>
                <cite className="mt-4 block font-semibold not-italic text-white">
                  Laura
                </cite>
              </div>
            </blockquote>
            <blockquote className="sm:flex lg:block">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                aria-hidden="true"
                className="flex-shrink-0 text-gray-500"
              >
                <path
                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                  fill="currentColor"
                />
              </svg>
              <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                <p className="text-lg text-gray-300">
                  &quot;Muy contento con el servicio. Me explicaron todo el proceso y me dieron consejos útiles para el mantenimiento de mi coche.&quot;
                </p>
                <cite className="mt-4 block font-semibold not-italic text-white">
                  Javier
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionSection;