import { FaReact, FaCss3Alt, FaJsSquare, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiDotnet } from "react-icons/si";
import training from "../../assets/training.png";
import proyecto1 from "../../assets/proyecto1.png";
import swagger from "../../assets/swagger.png";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Training Center",
      languages: ["React", "JavaScript", "Tailwind CSS", "CSS"],
      description:
        "Una aplicación web para gestionar tareas diarias Incluye autenticación de usuarios  y permite la categorización y priorización de tareas. Ideal para quienes buscan mejorar su productividad.",
      githubLink: "https://github.com/briziomauro/PPS-FrontEnd",
      projectLink: "https://gestor-de-tareas.com",
      imageUrl: training,
    },
    {
      title: "Mundo Matero",
      languages: ["React", "JavaScript", "BootsTrap", "CSS"],
      description:
        "Una tienda en línea de ropa, con funcionalidades para explorar productos Incluye una sección de administración para la gestión de inventarios y seguimiento de pedidos.",
      githubLink: "https://github.com/arrastianicolas/E-coomerce-Mate-TP-LAB3-",
      projectLink: null,
      imageUrl: proyecto1,
    },
    {
      title: "API e-commerce",
      languages: [".NET", "C#"],
      description:
        "Un sistema educativo para gestionar estudiantes, instructores, fichas, asistencias mediante un código QR facilitando el seguimiento de los aprendices y la administración de la información académica.",
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

  return (
    <div className="h-auto py-10 dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-black dark:text-white font-bold mt-10 mb-12">
          Mis Proyectos:
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg  bg-card text-card-foreground shadow-md p-6 bg-[#08132b] flex flex-col items-start"
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
