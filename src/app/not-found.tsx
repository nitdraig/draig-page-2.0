import React from "react";

export default function NotFound() {
  return (
    <section className="bg-[#162b46] w-screen relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
      <div className="max-w-xl mx-auto sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center lg:pt-8 pt-24">
          <div className="ml-4 lg:text-3xl text-2xl text-white  tracking-wider">
            404 <br /> La página que buscas no existe... <br /> aún
          </div>
        </div>
        <div className="flex flex-wrap  justify-center mt-4 gap-6">
          <a className="relative" href="/#">
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
            <span className="fold-bold text-2xl relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1  font-bold text-black transition duration-300 hover:bg-[#4B0082] hover:text-white">
              Volver
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
