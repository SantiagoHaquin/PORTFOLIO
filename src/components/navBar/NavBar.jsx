function Navbar() {
  return (
    <div className="flex items-center justify-center max-w-fit max-h-15 h-full w-full mt-7 bg-black opacity-90 text-white border-2 border-[#2f4bff27] rounded-full px-8 py-3 shadow-lg mx-auto my-4">
      <button className="text-sm font-lato p-[5px] px-[10px] text-white rounded-[10px] hover:bg-zinc-400 hover:bg-opacity-15  transition duration-200">
        <a href="#sobre-mi">Sobre Mi</a>
      </button>
      <button className="text-sm font-lato p-[4px] px-[10px] rounded-[15px] hover:bg-zinc-400 hover:bg-opacity-15  transition duration-200">
        <a href="#sobre-mi">Proyectos</a>
      </button>
      <button className="text-sm font-lato p-[4px] px-[10px] text-white rounded-[15px] hover:bg-zinc-400 hover:bg-opacity-15  transition duration-200">
        <a href="#sobre-mi">Trayectoria</a>
      </button>
      <button className="text-sm font-lato p-[4px] px-[10px] rounded-[15px] hover:bg-zinc-400 hover:bg-opacity-15  transition duration-200">
        <a href="#sobre-mi">Skills</a>
      </button>
     
    </div>
  );
}

export default Navbar;
