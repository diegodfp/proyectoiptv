import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">¿Por qué elegirnos?</h2>
        <p className="text-lg mb-4">Disfruta de una experiencia sin interrupciones, calidad garantizada y soporte 24/7.</p>
        <ul className="list-none">
          <li>✔ Canal en HD y 4K</li>
          <li>✔ Acceso desde cualquier dispositivo</li>
          <li>✔ Soporte técnico dedicado</li>
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
