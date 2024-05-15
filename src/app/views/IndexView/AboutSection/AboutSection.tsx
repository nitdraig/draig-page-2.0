import React from "react";

const AboutSection = () => {
  return (
    <section className="relative h-screen w-screen flex items-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="./about_bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto px-6 py-12 bg-white bg-opacity-90 rounded-lg shadow-lg text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            Descripción sobre tu empresa o equipo.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            Aquí puedes agregar más información sobre tu equipo, empresa, o lo
            que desees comunicar.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Continuar leyendo
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
