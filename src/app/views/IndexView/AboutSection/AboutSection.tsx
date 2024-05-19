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
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center md:text-left">
          <h2 className="lg:text-6xl text-4xl md:text-5xl font-bold text-white mb-4">
            DRAIG
          </h2>
          <p className="lg:text-2xl text-xl text-white mb-8">
            Detrás de este nombre se encuentra un compositor, productor y
            escritor, con una pasión desbordante por el arte.
          </p>
          <p className="lg:text-2xl text-xl text-white mb-8">
            DRAIG ha dejado su huella en la industria musical con su música en
            Spotify y otras plataformas. <br /> Además de música, DRAIG también
            ha incursionado en la escritura, contando con un libro publicado en
            Amazon. <br />
            Fundador de Tinta Negra Studios, dedicado a crear producciones
            audiovisuales de todo tipo.
          </p>
          <div className="flex flex-wrap  justify-center gap-6">
            <a className="relative" href="#">
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="fold-bold text-2xl relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1  font-bold text-black transition duration-100 hover:bg-purple-500 hover:text-white">
                Placebo para el alma
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
