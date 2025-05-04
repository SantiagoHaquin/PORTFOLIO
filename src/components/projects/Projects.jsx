import { useEffect, useState } from "react";
import { FaReact, FaCss3Alt, FaJsSquare, FaCode, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiDotnet } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import training from "../../assets/training.png";
import proyecto1 from "../../assets/proyecto1.png";
import swagger from "../../assets/swagger.png";
import Modal from "./Modal";
import videotraining from "../../assets/videotraining.mp4";


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const projects = [
    {
      id: 1,
      title: "Training Center",
      languages: ["React", "JavaScript", "Tailwind CSS", "CSS"],
      description:
        "Aplicacion web para gestionar los turnos, rutinas y planes alimenticios de los clientes. Con funcionalidades para registrar clientes pedir rutinas/planes nutricionales y funcionalidades para que los profesores interactuen con los clientes",
      githubLink: "https://github.com/briziomauro/PPS-FrontEnd",
      imageUrl: training,
      media: [
        {
          type: "image",
          url: training,
          alt: "Training Center - Vista principal"
        },
        {
          type: "mp4",
          url: videotraining,
          alt: "Training Center - Vista secundaria"
        }
      ]
    },
    {
      id: 2,
      title: "Mundo Matero",
      languages: ["React", "JavaScript", "BootsTrap", "CSS"],
      description:
        "Tienda en línea de mates, con funcionalidades para explorar productos Incluye una sección de administración de usuarios y productos.",
      githubLink: "https://github.com/arrastianicolas/E-coomerce-Mate-TP-LAB3-",
      projectLink: null,
      imageUrl: proyecto1,
      media: [
        {
          type: "image",
          url: proyecto1,
          alt: "Mundo Matero - Vista principal"
        },
        
      ]
    },
    {
      id: 3,
      title: "API e-commerce",
      languages: [".NET", "C#"],
      description:
        "Sistema para gestionar la tienda de mates con todas sus funcionalidades",
      githubLink: "https://github.com/SantiagoHaquin/TP-PROG3-WEBAPIMATE",
      projectLink: null,
      imageUrl: swagger,
      media: [
        {
          type: "image",
          url: swagger,
          alt: "API e-commerce - Documentación Swagger"
        },
        
      ]
    },
  ];

  const languageIcons = {
    React: <FaReact className="mr-1" />,
    JavaScript: <FaJsSquare className="mr-1" />,
    "Tailwind CSS": <SiTailwindcss className="mr-1" />,
    CSS: <FaCss3Alt className="mr-1" />,
    ".NET": <SiDotnet className="mr-1" />,
  };

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
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            data-index={index}
            className={`project-card rounded-lg bg-card text-card-foreground shadow-md p-6 bg-[#08132b] flex flex-col items-start transform transition-all duration-300 cursor-pointer ${
              visibleIndexes.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            onClick={() => setSelectedProject(project)}
            whileHover={{ 
              y: -7,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.1 }
            }}
            transition={{ duration: 0.1 }}
          >
            <motion.img
              layoutId={`image-${project.id}`}
              src={project.imageUrl}
              alt={`${project.title} Image`}
              className="w-full h-40 object-cover rounded-lg mb-4"
              
            />
            <motion.div layoutId={`content-${project.id}`}>
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub />
                </a>
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white px-2 py-1 rounded-lg text-2xl sm:text-3xl hover:bg-blue-900 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaCode />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            isOpen={true}
            onClose={() => setSelectedProject(null)}
            imageUrl={selectedProject.imageUrl}
            title={selectedProject.title}
            description={selectedProject.description}
            languages={selectedProject.languages}
            githubLink={selectedProject.githubLink}
            projectLink={selectedProject.projectLink}
            media={selectedProject.media}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
