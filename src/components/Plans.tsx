import React, { useState } from "react";

const Plans: React.FC = () => {
  // Estado para alternar entre precios de un dispositivo y dos dispositivos
  const [deviceOption, setDeviceOption] = useState<"one" | "two">("one");

  // Precios para diferentes dispositivos
  const plans = {
    one: [
      { duration: "1 Mes", oldPrice: "€14.99", price: "€9.99", features: ["+25,000 Canales en vivo", "+40,000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte vip gratutito las 24 horas, los 7 días de la semana"] },
      { duration: "3 Meses", oldPrice: "€29.99", price: "€24.99", features: ["+25,000 Canales en vivo", "+40,000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte vip gratutito las 24 horas, los 7 días de la semana"]  },
      { duration: "6 Meses", oldPrice: "€44.99", price: "€39.99", features: ["+25,000 Canales en vivo", "+40,000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte vip gratutito las 24 horas, los 7 días de la semana"] },
      { duration: "12 Meses", oldPrice: "€69.99", price: "€64.99", features: ["+25,000 Canales en vivo", "+40,000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte vip gratutito las 24 horas, los 7 días de la semana"]  },
    ],
    two: [
      { duration: "1 Mes", oldPrice: "€22.99", price: "€17.99", features: ["+25,000 Canales en vivo", "+40,000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte vip gratutito las 24 horas, los 7 días de la semana"]  },
      { duration: "3 Meses", oldPrice: "€49.99", price: "€44.99", features: ["+25,000 Canales en vivo", "+40,000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte vip gratutito las 24 horas, los 7 días de la semana"]  },
      { duration: "6 Meses", oldPrice: "€79.99", price: "€74.99", features:["+25,000 Canales en vivo", "+40,000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte vip gratutito las 24 horas, los 7 días de la semana"]  },
      { duration: "12 Meses", oldPrice: "€134.99", price: "€129.99", features: ["+25,000 Canales en vivo", "+40,000 Películas Y Series", "Cambiar entre dispositivos", "Uso de VPN compatible", "Calidad 4k/HD/UHD", "Guía de televisión", "Mira en cualquier dispositivo", "Soporte vip gratutito las 24 horas, los 7 días de la semana"] },
    ],
  };

  return (
    <section id="plans" className="py-16 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Nuestros planes</h2>

        {/* Botones para alternar entre un dispositivo y dos dispositivos */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setDeviceOption("one")}
            className={`py-2 px-4 rounded-l-lg ${deviceOption === "one" ? "bg-primary text-white" : "bg-gray-700 text-gray-300"}`}
          >
            Un dispositivo
          </button>
          <button
            onClick={() => setDeviceOption("two")}
            className={`py-2 px-4 rounded-r-lg ${deviceOption === "two" ? "bg-primary text-white" : "bg-gray-700 text-gray-300"}`}
          >
            Dos dispositivos
          </button>
        </div>

        {/* Tarjetas de planes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans[deviceOption].map((plan, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
              <p className="text-gray-500 line-through">{plan.oldPrice}</p>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <button className="mt-4 bg-primary text-white py-2 px-6 rounded-lg hover:bg-red-600">
                Comprar IPTV
              </button>
              <ul className="mt-4 text-left space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
