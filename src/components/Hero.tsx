import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="bg-cover bg-center h-screen relative pt-16" // Ajusta el padding para la barra de navegación
      style={{ backgroundImage: "url('/images/index.jpg')" }}
    >
      {/* Filtro oscuro */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido principal */}
      <div className="container mx-auto text-center relative z-10 text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          El Mejor Proveedor de IPTV en España
          <br />
          <TypeAnimation
            sequence={[
              "Acceso ilimitado",
              2000,
              "Más de 19.900 canales",
              2000,
              "Películas y series en 4K",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-secondary"
          />
        </h1>
        <p className="text-lg mb-6">
          Imagina tener acceso ilimitado a más de 19.900 canales para disfrutar de contenido en vivo, y una vasta biblioteca con más de 79.500 películas y series de TV. Todo esto, sin bloqueos ni interrupciones, y en una calidad excepcional que abarca 4K, FHD, HD y SD, para adaptarse perfectamente a tus dispositivos y preferencias. ¡No esperes más y adquiere el mejor servicio IPTV hoy mismo!
        </p>
        <a
          href="#planes"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
        >
          Descubre nuestros planes
        </a>
      </div>
    </section>
  );
};

export default Hero;
