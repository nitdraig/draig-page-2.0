import React from "react";
import AnimationText from "../../../components/AnimationText";

const BookSection = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#4B0082] via-[#9370DB] to-[#4B0082] bg-cover bg-center h-full relative"
      id="book"
    >
      <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0"></div>
      <div>
        <div className="min-h-screen flex justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center z-10 lg:mt-0 mt-16">
            <div className="max-w-lg text-center md:text-left lg:mx-auto mx-10">
              <h2 className="lg:text-4xl text-3xl font-bold text-gray-100 tracking-tight">
                Día 13, el gato negro de ojos azules y otras locuras.
              </h2>
              <p className="mt-4 lg:text-2xl text-lg text-gray-300">
                Mi primer libro, vio la luz el 24 de agosto del 2019. Trata de
                una recopilación de cuentos, poemas, relatos, vivencias,
                reflexiones y delirios, escritos con una fuerza sentimental y
                personal muy grande. <br />
                Puede conseguirse, de momento, en Amazon en formato E-book y
                físico. Espero sea de tu agrado y puedas hacerme saber que
                llegaste a leerlo. Me tomó más de 3 años este proyecto.
              </p>
              <div className="flex flex-row justify-center md:justify-start items-center space-x-3 mt-5">
                <a
                  href="https://www.amazon.com/dp/1687540241"
                  target="_blank"
                  className="w-14 h-14 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-[#9370DB] hover:drop-shadow-lg cursor-pointer hover:transform hover:scale-110 hover:duration-300"
                >
                  <img src="./icons/amazon.svg" className="w-12" alt="" />
                </a>
                <a
                  href="https://drive.google.com/file/d/19lPaKyYY-HTJIei8toHkY-JMH39Tiyn5/view?usp=sharing"
                  target="_blank"
                  className="w-14 h-14 items-center justify-center inline-flex rounded-2xl font-bold text-lg hover:transform hover:scale-110 hover:duration-200 bg-[#9370DB] hover:drop-shadow-lg cursor-pointer"
                >
                  <img src="./icons/read.png" className="w-12 invert" alt="" />
                </a>
                <a className="w-14 cursor-not-allowed h-14 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-[#9370DB] hover:drop-shadow-lg  hover:transform hover:scale-110 hover:duration-300">
                  <img src="./icons/store.png" className="w-12 invert" alt="" />
                </a>
              </div>
            </div>
            <div className="lg:mx-0 max-w-xl flex rounded-3xl bg-[#4B0082] shadow-xl lg:rotate-6 rotate-2 hover:shadow-black/80 transition-shadow mx-10">
              <div className="flex-col flex self-center">
                <div>
                  <div>
                    <blockquote className="text-left">
                      <div className="relative">
                        <div className="relative">
                          <img
                            src="https://res.cloudinary.com/draig/image/upload/v1688837281/draig-page/kixgjneuvdurbaadspqx.jpg"
                            alt="aji"
                            className="object-cover w-screen h-60 mx-auto rounded-t-3xl"
                          />
                          <div className="rounded-t-3xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div>
                        </div>
                      </div>

                      <div className="relative m-5 p-2 lg:p-5">
                        <svg
                          className="absolute left-0 w-6 fill-indigo-500"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                        </svg>
                        <p className="text-gray-100 text-lg block  px-5">
                          <AnimationText
                            text=" No es fácil desnudar tu alma sin saber quién llegaría
                          a leerlo y cómo podría ser interpretado, aún así me
                          tomé ese atrevimiento, en mi humilde repaso de ideas,
                          conocimientos e historias en diversos formatos.
                          Espero puedas encontrarle el valor en tu lectura."
                          />
                        </p>
                        <svg
                          className="absolute right-0 w-6 fill-indigo-500"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                        </svg>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
