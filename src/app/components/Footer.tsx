import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <img
              src="https://res.cloudinary.com/draig/image/upload/v1688837284/draig-page/ciapkyqxomwvb6myfb9i.svg"
              alt="Draig_logo"
              className="w-1/4 mx-auto md:mx-0"
            />
            <p className="text-gray-400 mt-4">
              © CopyRight 2024. All rights reserved
            </p>
            <p className="text-gray-400 mt-2">
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/avellaneda-agustín-tns/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                DraigDev
              </a>
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
            <div className=" space-x-6">
              <a
                href="https://www.youtube.com/draig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800"
              >
                <img
                  src="./icons/youtube.svg"
                  className="w-20  hover:transform rounded-full hover:scale-110 hover:duration-300"
                  alt=""
                  loading="lazy"
                />
              </a>
              <a
                href="https://instagram.com/nitdraig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <img
                  src="./icons/instagram.svg"
                  className="w-20  hover:transform rounded-full hover:scale-110 hover:duration-300"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
