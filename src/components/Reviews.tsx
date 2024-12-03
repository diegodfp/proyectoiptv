import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Lo que dicen nuestros clientes</h2>
        <div className="space-y-8">
          <div className="text-lg">"Excelente servicio, calidad de imagen impresionante!"</div>
          <div className="text-lg">"El mejor IPTV que he probado. ¡Altamente recomendable!"</div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
