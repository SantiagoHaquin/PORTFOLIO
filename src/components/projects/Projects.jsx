import { useEffect, useState } from "react";
import { FaReact, FaCss3Alt, FaJsSquare, FaCode, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiDotnet } from "react-icons/si";
import training from "../../assets/training.png";
import proyecto1 from "../../assets/proyecto1.png";
import swagger from "../../assets/swagger.png";

function Projects() {
  const projects = [
    {
      title: "Training Center",
      languages: ["React", "JavaScript", "Tailwind CSS", "CSS"],
      description:
        "Aplicacion web para gestionar los turnos, rutinas y planes alimenticios de los clientes. Con funcionalidades para registrar clientes pedir rutinas/planes nutricionales y funcionalidades para que los profesores interactuen con los clientes",
      githubLink: "https://github.com/briziomauro/PPS-FrontEnd",
      projectLink: "https://gestor-de-tareas.com",
      imageUrl: training,
    },
    {
      title: "Mundo Matero",
      languages: ["React", "JavaScript", "BootsTrap", "CSS"],
      description:
        "Tienda en línea de mates, con funcionalidades para explorar productos Incluye una sección de administración de usuarios y productos.",
      githubLink: "https://github.com/arrastianicolas/E-coomerce-Mate-TP-LAB3-",
      projectLink: null,
      imageUrl: proyecto1,
    },
    {
      title: "API e-commerce",
      languages: [".NET", "C#"],
      description:
        "Sistema para gestionar la tienda de mates con todas sus funcionalidades",
      githubLink: "https://github.com/SantiagoHaquin/TP-PROG3-WEBAPIMATE",
      projectLink: null,
      imageUrl: swagger,
    },
  ];

  const languageIcons = {
    React: <FaReact className="mr-1" />,
    JavaScript: <FaJsSquare className="mr-1" />,
    "Tailwind CSS": <SiTailwindcss className="mr-1" />,
    CSS: <FaCss3Alt className="mr-1" />,
    ".NET": <SiDotnet className="mr-1" />,
  };

  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
  
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 } 
    );
  
    const elements = document.querySelectorAll(".project-card");
    elements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-auto py-10">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-black dark:text-white font-bold mt-10 mb-12">
          Mis Proyectos:
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-12">
        {projects.map((project, index) => (
          <div
            key={index}
            data-index={index}
            className={`project-card rounded-lg bg-card text-card-foreground shadow-md p-6 bg-[#08132b] flex flex-col items-start transform transition-all duration-700 ${
              visibleIndexes.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={project.imageUrl}
              alt={`${project.title} Image`}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl lg:text-2xl text-white font-bold mb-4">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-white mb-4">
              {project.description}
            </p>
            <ul className="mb-4">
              {project.languages.map((language, index) => (
                <li
                  key={index}
                  className="inline-flex items-center text-white bg-[#212d43] rounded-full text-xs font-semibold px-2 py-1 mr-1"
                >
                  {languageIcons[language]} {language}
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-auto w-full justify-between">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-2 py-1 rounded-lg text-2xl sm:text-3xl hover:bg-blue-900 transition-all"
              >
                <FaGithub />
              </a>
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-2 py-1 rounded-lg text-2xl sm:text-3xl hover:bg-blue-900 transition-all"
                >
                  <FaCode />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
