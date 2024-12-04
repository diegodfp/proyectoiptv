import React from "react";

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "María G.",
      role: "Profesora, Madrid",
      text: "El servicio de IPTV es bastante bueno en términos generales. La calidad de transmisión es excelente, aunque a veces hay pequeños retrasos. Lo que más me gusta es la atención al cliente, siempre responden rápido y de manera eficaz.",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Paola M.",
      role: "Ingeniera, Barcelona",
      text: "El servicio de IPTV funciona bien, aunque a veces algunos canales tardan un poco en cargar. Sin embargo, la calidad de imagen es muy buena y el precio es justo. Se lo recomendaría a mis amigos y familiares sin dudarlo.",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Marlon A.",
      role: "Estudiante, Sevilla",
      text: "Gran variedad de canales y un precio que no se puede comparar. La experiencia es fantástica y siempre están actualizando el contenido.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section id="reviews" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-red-600 mb-6">
          Clientes Satisfechos
        </h2>
        <p className="text-center text-sm text-gray-500 mb-8">
          ★★★★★ rated excellent on <span className="font-bold">Trustpilot</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-red-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
