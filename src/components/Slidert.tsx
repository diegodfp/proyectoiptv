import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const ContentSlider: React.FC = () => {
  const logos = [
    { src: "/logos/hbo.png", alt: "Hbo" },
    { src: "/logos/axn.png", alt: "DKiss" },
    { src: "/logos/videoland.webp", alt: "Videoland" },
    { src: "/logos/dazn.webp", alt: "DAZN" },
    { src: "/logos/fox.png", alt: "Fox Sports" },
    { src: "/logos/hbo.png", alt: "1" },
    { src: "/logos/1.png", alt: "2" },
    { src: "/logos/2.png", alt: "3" },
    { src: "/logos/3.png", alt: "4" },
    { src: "/logos/4.png", alt: "5 Sports" },
    { src: "/logos/5.png", alt: "6" },
    { src: "/logos/6.png", alt: "7" },
    { src: "/logos/7.png", alt: "8" },
    { src: "/logos/8.png", alt: "9 Sports" }
  ];

  const slides = [
    { src: "/images/barbie.webp", alt: "Barbie" },
    { src: "/images/1917.webp", alt: "1917" },
    { src: "/images/batman.webp", alt: "Gran Turismo" },
    { src: "/images/shazam.webp", alt: "Shazam: Fury of the Gods" },
  ];

  return (
    <section className="bg-black text-white py-10">
      {/* Logos Slider */}
      {/* Título */}
      <h2 className="text-3xl font-bold text-center mb-6">
        Más de 20.000 Canales
      </h2>

      {/* Slider de Logos */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20} // Espacio reducido entre logos
        slidesPerView="auto" // Múltiples logos visibles a la vez
        loop={true}
        autoplay={{
          delay: 0, // Sin pausa, movimiento continuo
          disableOnInteraction: false,
        }}
        speed={2000} // Más rápido
        className="flex justify-center items-center"
      >
        {/* Repetimos los logos para crear la sensación de loop infinito */}
        {logos.concat(logos).map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
            style={{ width: "auto" }} // Ajustar automáticamente el tamaño del slide
          >
            <div className="w-28 h-16 md:w-32 md:h-20 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Películas y Series con IPTV España
      </h2>

      {/* Content Slider */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000, // Tiempo entre transiciones
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ContentSlider;
