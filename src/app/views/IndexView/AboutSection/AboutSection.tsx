import React from "react";
import AnimationText from "../../../components/AnimationText";

const AboutSection = () => {
  return (
    <section
      className="relative h-screen w-screen flex items-center"
      id="about"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="./about_bg.jpg"
          alt="Background"
          className="w-full  h-full  object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center md:text-left">
          <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold text-white mb-4">
            DRAIG
          </h1>
          <h3 className="lg:text-2xl text-xl text-white mb-8">
            Detrás de este nombre se encuentra un compositor, productor y
            escritor, con una pasión desbordante por el arte.
          </h3>

          <p className="lg:text-2xl text-xl text-white mb-8">
            <AnimationText
              text={
                "DRAIG ha dejado su huella en la industria musical con su música en Spotify y otras plataformas. Además de música, DRAIG también             ha incursionado en la escritura, contando con un libro publicado en Amazon.           Fundador de Tinta Negra Studios, dedicado a crear producciones audiovisuales de todo tipo."
              }
            />
          </p>
          <div className="flex flex-wrap  justify-center gap-6">
            <a className="relative" href="#songs">
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="fold-bold text-2xl relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1  font-bold text-black transition duration-300 hover:bg-[#4B0082] hover:text-white">
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
