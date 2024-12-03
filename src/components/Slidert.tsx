import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const ContentSlider: React.FC = () => {
  const logos = [
    { src: "/logos/hbo.png", alt: "Hbo" },
    { src: "/logos/axn.png", alt: "DKiss" },
    { src: "/logos/videoland.webp", alt: "Videoland" },
    { src: "/logos/dazn.webp", alt: "DAZN" },
    { src: "/logos/fox.png", alt: "Fox Sports" },
  ];

  const slides = [
    { src:"/images/barbie.webp", alt: "Barbie" },
        { src: "/images/1917.webp", alt: "1917" },
        { src: "/images/batman.webp", alt: "Gran Turismo" },
        { src: "/images/shazam.webp", alt: "Shazam: Fury of the Gods" },
      ];
    
      return (
        <section className="bg-black text-white py-10">
          {/* Logos */}
          <div className="flex justify-center gap-6 flex-wrap mb-8">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 object-contain"
              />
            ))}
          </div>
    
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Películas y Series con IPTV España
          </h2>
    
          {/* Slider */}
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
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
    
