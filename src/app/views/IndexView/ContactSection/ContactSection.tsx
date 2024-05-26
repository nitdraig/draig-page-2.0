import React from "react";

const ContactSection = () => {
  return (
    <section
      className="bg-[#9370db] h-full w-screen flex flex-col justify-center items-center"
      id="contact"
    >
      <div className="mx-10 text-center">
        <h3 className="lg:text-5xl text-4xl uppercase font-bold text-white mb-10 lg:mt-20 mt-14">
          ¡Gracias por tu apoyo!
        </h3>
        <div className="mb-8 flex justify-center">
          <img
            src="https://res.cloudinary.com/draig/image/upload/v1688837280/draig-page/c3hx5mbz6o0j7ohyddyr.png"
            loading="lazy"
            alt="Support Image"
            className="w-56 h-56 object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full max-w-4xl">
          <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0 md:mr-6">
            <h3 className="lg:text-3xl text-2xl font-semibold text-white mb-4">
              Sígueme en mis redes sociales
            </h3>
            <p className="text-lg text-gray-100 mb-4">
              Mantente en contacto conmigo a través de mis redes sociales. ¡Me
              encantaría saber de ti!
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/nitdraig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <img
                  src="/icons/instagram.svg"
                  className="w-16 hover:transform hover:scale-110 hover:duration-300"
                  alt="Instagram"
                  loading="lazy"
                />
              </a>
              <a
                href="https://youtube.com/draig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <img
                  src="/icons/youtube.svg"
                  className="w-16 hover:transform hover:scale-110 hover:duration-300"
                  alt="YouTube"
                  loading="lazy"
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
                  alt="iTunes"
                  loading="lazy"
                />
              </a>
              <a
                href="https://show4me.com/draig"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./icons/show4.jpg"
                  className="w-16 hover:transform rounded-full hover:scale-110 hover:duration-300"
                  alt="Show4Me"
                  loading="lazy"
                />
              </a>
              <a
                href="https://open.spotify.com/intl-es/artist/4OpBnqlUEGl2Q1coxeFget?si=We6N5owzR3C6ak5SPy352A&nd=1&dlsi=7935e19c5a4145d0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800"
              >
                <img
                  src="./icons/spotify.svg"
                  className="w-16 hover:transform hover:scale-110 hover:duration-300"
                  alt="Spotify"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="./logo.svg"
              alt="Contact Image"
              loading="lazy"
              className="w-64 h-64 object-cover rounded-lg mx-auto md:mx-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
