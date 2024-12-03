import React from 'react';

const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Nuestros planes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Plan Básico</h3>
            <p className="text-lg mb-4">Accede a los canales principales.</p>
            <span className="text-2xl font-bold">€10/mes</span>
            <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Suscribirse</button>
          </div>
          {/* Plan 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Plan Premium</h3>
            <p className="text-lg mb-4">Más canales y contenido exclusivo.</p>
            <span className="text-2xl font-bold">€20/mes</span>
            <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Suscribirse</button>
          </div>
          {/* Plan 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Plan Ultimate</h3>
            <p className="text-lg mb-4">Acceso completo a todo el contenido.</p>
            <span className="text-2xl font-bold">€30/mes</span>
            <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Suscribirse</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
