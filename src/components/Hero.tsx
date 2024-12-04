import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="bg-cover bg-center h-screen relative flex items-center justify-center"
      style={{ backgroundImage: "url('/images/index.jpg')" }}
    >
      {/* Filtro oscuro */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-white text-center max-w-3xl px-6 md:px-12 lg:px-20">
        {/* Contenedor del logo */}
        <div className="mt-8 md:mt-12 flex justify-center w-full">  {/* Reducido el margen superior */}
          <img
            src="/images/2.png" // Cambia esta ruta por la de tu logo
            alt="Logo de la empresa"
            className="max-h-[30vh] h-auto object-contain" // Ajuste proporcional usando unidades vh
          />
        </div>

        {/* Título principal con animación */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-8 mb-6 drop-shadow-lg">
          <TypeAnimation
            sequence={[
              "El Mejor Proveedor de Suscripción IPTV España", // Texto 1
              2000, // Tiempo de espera (ms)
              "Disfruta de más de 19.900 canales en vivo", // Texto 2
              2000, // Tiempo de espera (ms)
              "Más de 79.500 películas y series en 4K", // Texto 3
              2000, // Tiempo de espera (ms)
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        {/* Subtítulo descriptivo */}
        <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
          En <span className="font-bold text-primary">Premium IPTV España</span>, imagina tener a tu alcance más de <span className="font-bold text-primary">19.900 canales</span> junto con una increíble colección de más de <span className="font-bold text-primary">79.500 películas</span> y series. Todo esto sin bloqueos y en calidad 4K, FHD, HD y SD, adaptable a todos tus dispositivos.
        </p>

        {/* Botón de llamada a la acción */}
        <div className="flex justify-center">
          <a
            href="#planes"
            className="bg-primary text-white py-3 px-8 rounded-full text-lg shadow-lg hover:bg-red-600 transition-all"
          >
            Comprar IPTV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
