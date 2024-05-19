import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen flex justify-center items-center">
      <div className="w-full h-full relative z-0  overflow-hidden">
        <video
          src="./bg.mp4"
          className="w-auto min-w-full blur-sm min-h-full max-w-none absolute top-0 left-0 right-0 bottom-0 m-auto"
          autoPlay
          playsInline
          preload="auto"
          loop
          muted
        ></video>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-transparent bg-clip-text gradient-text animate-gradient uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
            Draig
          </h1>
          <p className="text-white uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            No es música, mi arte es placebo para el alma
          </p>
          <a
            href="#about"
            className="mt-8 text-2xl bg-transparent border border-white text-white  rounded-full flex items-center justify-center px-4 py-2  duration-300   transform  hover:-translate-y-1 transition  hover:bg-[#4B0082] "
          >
            <span className=" mr-2">Leer más</span>
            <svg
              className="w-6 h-6  "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
