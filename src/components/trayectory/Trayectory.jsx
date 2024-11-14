function Trayectory() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-20 p-16">
      <h1 className="text-6xl text-black dark:text-white font-bold mb-10">
        Mi trayectoria educativa:
      </h1>
      <div className="flex flex-col items-center justify-center w-full">
        <ol className="items-center sm:flex w-full">
          <li className="relative mb-6 sm:mb-0 w-full">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-zinc-400 rounded-full ring-8 ring-zinc-600 dark:bg-blue-900 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-950 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full dark:bg-gray-200 h-0.5 bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                Tecnicatura Universitaria en Programación
              </h3>
              <time className="block mb-2 text-sm leading-none font-bold text-gray-600 dark:text-white">
                Febrero 2023
              </time>
              <p className="text-base font-normal text-zinc-800 dark:text-gray-300">
                Get started with dozens of web components and interactive
                elements.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 w-full">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-zinc-400 rounded-full ring-8 ring-zinc-600 dark:bg-blue-900 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-950 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full dark:bg-gray-200 h-0.5 bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                Tecnicatura Universitaria en Programación
              </h3>
              <time className="block mb-2 text-sm leading-none font-bold text-gray-600 dark:text-white">
                Febrero 2023
              </time>
              <p className="text-base font-normal text-zinc-800 dark:text-gray-300">
                Get started with dozens of web components and interactive
                elements.
              </p>
            </div>
          </li>
          
        </ol>
      </div>
    </div>
  );
}

export default Trayectory;
