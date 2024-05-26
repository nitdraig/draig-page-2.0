import HeroTextAnimation from "@/app/components/HeroTextAnimation";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen flex justify-center items-center">
      <div className="w-full h-full relative z-0 bg-black  overflow-hidden">
        <video
          src="https://res.cloudinary.com/draig/video/upload/v1716749197/draig-page/cy274ihxe3kpyhtmo68t.mp4"
          className="lg:w-full w-screen blur-sm opacity-60 lg:min-h-full m-auto max-w-none absolute top-0 left-0 right-0 bottom-0"
          autoPlay
          playsInline
          preload="auto"
          loop
          muted
        ></video>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-transparent bg-clip-text gradient-text animate-gradient uppercase text-5xl  lg:text-8xl  font-bold mb-4 lg:mb-8">
            Draig
          </h1>
          <h3>
            <HeroTextAnimation />
          </h3>

          <div className="flex flex-wrap mt-4  lg:mt-10 justify-center gap-6">
            <a className="relative" href="#about">
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="fold-bold lg:text-3xl text-2xl relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1  font-bold text-black transition duration-300 hover:bg-[#4B0082] hover:text-white">
                Leer Más
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
