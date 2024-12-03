import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Contáctanos</h2>
        <p className="text-lg mb-6">¿Tienes preguntas? ¡Estamos aquí para ayudarte!</p>
        <form className="space-y-4">
          <input type="email" placeholder="Tu correo" className="w-full px-4 py-2 border rounded-lg" />
          <textarea placeholder="Tu mensaje" className="w-full px-4 py-2 border rounded-lg" rows={4}></textarea>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
