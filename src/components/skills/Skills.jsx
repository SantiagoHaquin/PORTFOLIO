import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiDotnet,
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiVisualstudiocode,
  SiVisualstudio,
} from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    description:
      "Biblioteca de JavaScript para construir interfaces de usuario interactivas.",
    color: "#61DAFB",
  },
  {
    name: "NET Core",
    icon: SiDotnet,
    description:
      "Plataforma de desarrollo de Microsoft para aplicaciones web, de escritorio y móviles.",
    color: "#5C2D91",
  },
  {
    name: "Python",
    icon: FaPython,
    description: "Lenguaje de programación multipropósito y fácil de aprender.",
    color: "#ffde56",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    description: "Lenguaje de marcado para estructurar contenido web.",
    color: "#F16524",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    description: "Lenguaje de estilo para diseñar páginas web.",
    color: "#23A7F3",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    description: "Sistema de gestión de bases de datos relacional.",
    color: "#23A7F4",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Framework de CSS para diseño web moderno.",
    color: "#38BDF8",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    description: "Framework CSS para diseño responsivo.",
    color: "#5C2D90",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    description: "Lenguaje de programación para web interactiva.",
    color: "#F7E018",
  },
  {
    name: "GitHub",
    icon: IoLogoGithub,
    description: "Plataforma para control de versiones y colaboración.",
    color: "#FFFFFF",
  },
  {
    name: "Visual Studio Code",
    icon: SiVisualstudiocode,
    description: "Editor de código ligero y versátil.",
    color: "#23A7F2",
  },
  {
    name: "Visual Studio",
    icon: SiVisualstudio,
    description: "Entorno de desarrollo integrado de Microsoft.",
    color: "#CB96F8",
  },
];

function Skills() {
  const [description, setDescription] = useState(
    "Pasa el cursor sobre una habilidad para ver más detalles."
  );
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="bg-black dark:bg-zinc-300 dark:bg-opacity-10 bg-opacity-10 min-h-screen flex flex-col justify-center items-center py-10 px-4">
      <h2 className="text-2xl text-black dark:text-white sm:text-3xl md:text-4xl font-bold text-center mb-12 -mt-4">
        Herramientas y Tecnologías que utilizo
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 place-items-center">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center transition-transform transform group"
            onMouseEnter={() => {
              setHoveredTech(tech.color);
              setDescription(tech.description);
            }}
            onMouseLeave={() => {
              setHoveredTech(null);
              setDescription(
                "Pasa el cursor sobre una habilidad para ver más detalles."
              );
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <tech.icon
              className="text-3xl sm:text-4xl md:text-5xl mb-2"
              style={{
                color: hoveredTech === tech.color ? tech.color : "black",
              }}
            />
            <span className="text-xs sm:text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-black dark:text-white sm:text-sm md:text-base lg:text-lg mt-6 text-center max-w-2xl">
        {description}
      </p>
    </div>
  );
}

export default Skills;
