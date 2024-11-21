import React, { useState } from "react";
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
  { name: "React", icon: FaReact, description: "Biblioteca de JavaScript para construir interfaces de usuario interactivas.", color: "#61DAFB" },
  { name: "NET Core", icon: SiDotnet, description: "Plataforma de desarrollo de Microsoft para aplicaciones web, de escritorio y móviles.", color: "#5C2D91" },
  { name: "Python", icon: FaPython, description: "Lenguaje de programación multipropósito y fácil de aprender.", color: "#ffde56" },
  { name: "HTML", icon: FaHtml5, description: "Plataforma para crear, desplegar y ejecutar aplicaciones en contenedores.", color: "#F16524" },
  { name: "CSS", icon: FaCss3Alt, description: "Plataforma en la nube de Microsoft para servicios de desarrollo y almacenamiento.", color: "#23A7F3" },
  { name: "MySQL", icon: SiMysql, description: "Sistema de gestión de bases de datos relacional y orientado a objetos.", color: "#23A7F4" },
  { name: "Tailwind CSS", icon: SiTailwindcss, description: "Motor de videojuegos popular para desarrollo de juegos en 2D y 3D.", color: "#38BDF8" },
  { name: "Bootstrap", icon: FaBootstrap, description: "Motor de juego avanzado para desarrollo de gráficos de alta fidelidad.", color: "#5C2D90" },
  { name: "JavaScript", icon: SiJavascript, description: "Motor de juego avanzado para desarrollo de gráficos de alta fidelidad.", color: "#F7E018" },
  { name: "GitHub", icon: IoLogoGithub, description: "Motor de juego avanzado para desarrollo de gráficos de alta fidelidad.", color: "#FFFFFF" },
  { name: "Visual Studio Code", icon: SiVisualstudiocode, description: "Motor de juego avanzado para desarrollo de gráficos de alta fidelidad.", color: "#23A7F2" },
  { name: "Visual Studio", icon: SiVisualstudio, description: "Motor de juego avanzado para desarrollo de gráficos de alta fidelidad.", color: "#CB96F8" },
];

function Skills() {
  const [description, setDescription] = useState("Pasa el cursor sobre una habilidad para ver más detalles.");
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="bg-black dark:bg-zinc-600  dark:bg-opacity-10 bg-opacity-10 h-screen mt-32 text-black dark:text-white flex flex-col justify-between items-center py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Herramientas y Tecnologías que utilizo</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 place-items-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col p-4 items-center transition-transform transform hover:translate-y-[-10px] relative group"
            onMouseEnter={() => {
              setHoveredTech(tech.color);
              setDescription(tech.description);
            }}
            onMouseLeave={() => {
              setHoveredTech(null);
              setDescription("Pasa el cursor sobre una habilidad para ver más detalles.");
            }}
          >
            <tech.icon
              className="text-4xl sm:text-5xl mb-2"
              style={{ color: hoveredTech === tech.color ? tech.color : "black" }}
            />
            <span className="text-xs sm:text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute bottom-[-20px]">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      <p className="text-sm sm:text-base md:text-lg mt-6 text-center px-4">{description}</p>
    </div>
  );
}

export default Skills;
