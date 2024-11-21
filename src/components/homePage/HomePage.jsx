import Navbar from "../navBar/NavBar";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Projects from "../projects/Projects";
import GradientBackground from "../gradientBackground/GradientBackground";
// import Trayectory from "../trayectory/Trayectory";
import Skills from "../skills/Skills";
import AboutMe from "../aboutMe/AboutMe";
import CVSantiagoHaquinLoValvo from "../../assets/CVSantiagoHaquinLoValvo.pdf";

const HomePage = () => {
  const [copied, setCopied] = useState(false);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleCopyEmail = () => {
    const email = "santihaquin321@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const target = document.querySelector(".typewriter");
    const text = target.innerText;
    let index = 0;

    function type() {
      if (index < text.length) {
        target.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }

    target.innerHTML = "";
    type();

    const interBubble = document.querySelector(".interactive");
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    };

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  return (
    <div>
      <GradientBackground />
      <div className="min-h-screen flex flex-col items-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full px-4 sm:px-8">
          <Navbar />
          <label className="swap mt-7 text-blue-950 dark:text-white my-4 swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              checked={theme === "dark"}
              onChange={handleChangeTheme}
            />

            <svg
              className="swap-off h-9 w-9 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on h-9 w-9 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        <div className="flex flex-col text-black dark:text-white items-center justify-center mt-20 text-center w-full px-4 sm:px-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-spaceMono m-2 typewriter">
            ¡Hola! soy...
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-ubuntu font-bold mb-4">
            Santiago Haquin
          </h1>
          <h2 className="font-roboto mt-4 text-2xl sm:text-3xl lg:text-4xl">
            Desarrollador Full-Stack
          </h2>
        </div>

        <div className="flex flex-wrap justify-center text-lg items-center mt-4 font-roboto text-white px-4 sm:px-8">
          <button className="m-1 gap-1 p-2 px-4 rounded-md bg-blue-950 flex items-center justify-center hover:bg-opacity-70 hover:bg-blue-900 transition-all duration-200 text-sm sm:text-base">
            <IoDownloadOutline />
            <a
              className="ml-1"
              href={CVSantiagoHaquinLoValvo}
              download="CV Santiago Haquin Lo Valvo.pdf"
              target="_blank"
            >
              CV
            </a>
          </button>

          <button
            className="m-1 gap-1 p-2 px-4 rounded-md bg-blue-950 flex items-center justify-center hover:bg-opacity-70 hover:bg-blue-900 transition-all duration-200 text-sm sm:text-base"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/santiago-haquin-lo-valvo-866717256/",
                "_blank"
              )
            }
          >
            <FaLinkedin />
            <span className="ml-1">LinkedIn</span>
          </button>

          <button
            className="m-1 gap-1 p-2 px-4 rounded-md bg-blue-950 flex items-center justify-center hover:bg-opacity-70 hover:bg-blue-900 transition-all duration-200 text-sm sm:text-base"
            onClick={() =>
              window.open("https://github.com/SantiagoHaquin", "_blank")
            }
          >
            <FaGithub />
            <span className="ml-1">GitHub</span>
          </button>

          <button
            className="relative m-1 gap-1 p-2 px-4 rounded-md bg-blue-950 flex items-center justify-center hover:bg-opacity-70 hover:bg-blue-900 transition-all duration-200 text-sm sm:text-base"
            onClick={handleCopyEmail}
          >
            <IoMdMail />
            <span className="ml-1 mr-1">santihaquin321@gmail.com</span>
            <FaCopy />

            {copied && (
              <div className="absolute top-full mt-1 p-1 px-3 rounded-md bg-blue-800 text-white text-sm">
                ¡Copiado!
              </div>
            )}
          </button>
        </div>

        <div className="absolute bottom-4 flex flex-col items-center text-black text-xl dark:text-white">
          <IoIosArrowDown className="mt-1 text-2xl sm:text-3xl" />
        </div>
      </div>

      <div className="w-full">
        <div id="proyectos">
          <Projects />
        </div>
        {/* <div id="trayectoria">
          
          <Trayectory />
        </div> */}
        <div id="skills">
          <Skills />
        </div>
        <div id="sobre-mi">
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
