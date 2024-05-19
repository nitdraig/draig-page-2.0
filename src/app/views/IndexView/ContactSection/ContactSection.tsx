import React from "react";

const ContactSection = () => {
  return (
    <section
      className="bg-[#9370db] h-screen w-screen flex flex-col justify-center items-center "
      id="contact"
    >
      <h3 className="text-5xl uppercase font-bold text-white mb-10">
        Gracias por tu apoyo
      </h3>
      <div className="mb-8">
        <img
          src="https://res.cloudinary.com/draig/image/upload/v1688837280/draig-page/c3hx5mbz6o0j7ohyddyr.png"
          loading="lazy"
          alt="Support Image"
          className="w-56 h-56 object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full max-w-4xl">
        <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0 md:mr-6">
          <h3 className="text-3xl font-semibold text-white mb-4">
            Sígueme en mis redes sociales
          </h3>
          <p className="text-lg text-white mb-4">
            Mantente en contacto conmigo a través de mis redes sociales. ¡Me
            encantaría saber de ti!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <img
                src="/icons/instagram.svg"
                className="w-16 hover:transform hover:scale-110 hover:duration-300"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <img
                src="/icons/youtube.svg"
                className="w-16 hover:transform hover:scale-110 hover:duration-300"
                alt=""
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
            >
              <img
                src="./icons/itunes.svg"
                className="w-16 hover:transform hover:scale-110 hover:duration-300"
                alt=""
                loading="lazy"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img
                src="./icons/show4.jpg"
                className="w-16 hover:transform rounded-full hover:scale-110 hover:duration-300"
                alt=""
                loading="lazy"
              />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              <img
                src="./icons/spotify.svg"
                className="w-16 hover:transform hover:scale-110 hover:duration-300"
                alt=""
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-right md:text-left">
          <img
            src="./logo.svg"
            alt="Contact Image"
            loading="lazy"
            className="w-64 h-64 object-cover rounded-lg mx-auto md:mx-0 invert"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
