import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2b184b] py-12 0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <img
              src="https://res.cloudinary.com/draig/image/upload/v1688837284/draig-page/ciapkyqxomwvb6myfb9i.svg"
              alt="Draig_logo"
              className="w-1/4 mx-auto md:mx-0"
            />
            <p className="text-gray-200 mt-0">
              © CopyRight 2024. All rights reserved
            </p>
            <a
              href="https://agustin.top"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 mt-2 hover:text-blue-600"
            >
              Developed by A.A
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
