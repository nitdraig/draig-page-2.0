import React from "react";

const TopButton = () => {
  return (
    <div className="fixed bottom-10 right-10  z-50">
      <a className="relative text-white px-2 py-4 rounded-full" href="/#">
        <span className="fold-bold text-2xl relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1  font-bold text-black transition duration-300 hover:bg-[#4B0082] hover:text-white">
          Arriba
        </span>
      </a>
    </div>
  );
};

export default TopButton;
