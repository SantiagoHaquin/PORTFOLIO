import React from "react";

function Navbar() {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-wrap items-center justify-center max-w-fit max-h-15 h-full w-full mt-7 bg-black bg-opacity-30 text-white rounded-full px-8 py-3 shadow-lg mx-auto my-4">
      <button
        className="text-sm font-lato p-[4px] px-[10px] rounded-[15px] hover:bg-zinc-400 hover:bg-opacity-15 transition duration-200 mb-2 md:mb-0"
        onClick={() => handleScroll("proyectos")}
      >
        Proyectos
      </button>
      <button
        className="text-sm font-lato p-[4px] px-[10px] rounded-[15px] hover:bg-zinc-400 hover:bg-opacity-15 transition duration-200 mb-2 md:mb-0"
        onClick={() => handleScroll("skills")}
      >
        Skills
      </button>
      <button
        className="text-sm font-lato p-[5px] px-[10px] rounded-[10px] hover:bg-zinc-400 hover:bg-opacity-15 transition duration-200 mb-2 md:mb-0"
        onClick={() => handleScroll("sobre-mi")}
      >
        Sobre Mi
      </button>
    </div>
  );
}

export default Navbar;
