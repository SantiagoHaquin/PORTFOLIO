import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import training from "../../assets/training.png";
import proyecto1 from "../../assets/proyecto1.png";
import swagger from "../../assets/swagger.png";
import Modal from "./Modal";
import videotraining from "../../assets/videotraining.mp4";

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.13,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
        { type: "image", url: training, alt: "Training Center - Vista principal" },
        { type: "mp4", url: videotraining, alt: "Training Center - Vista secundaria" },
      ],
    },
    {
      id: 2,
      title: "Mundo Matero",
      languages: ["React", "JavaScript", "Bootstrap", "CSS"],
      description:
        "Tienda en línea de mates, con funcionalidades para explorar productos. Incluye una sección de administración de usuarios y productos.",
      githubLink: "https://github.com/arrastianicolas/E-coomerce-Mate-TP-LAB3-",
      projectLink: null,
      imageUrl: proyecto1,
      media: [{ type: "image", url: proyecto1, alt: "Mundo Matero - Vista principal" }],
    },
    {
      id: 3,
      title: "API e-commerce",
      languages: [".NET", "C#"],
      description:
        "Sistema para gestionar la tienda de mates con todas sus funcionalidades.",
      githubLink: "https://github.com/SantiagoHaquin/TP-PROG3-WEBAPIMATE",
      projectLink: null,
      imageUrl: swagger,
      media: [{ type: "image", url: swagger, alt: "API e-commerce - Documentación Swagger" }],
    },
  ];

  return (
    <div className="py-24 px-4 md:px-12">
      {/* Section header */}
      <div className="text-center mb-16">
        <p className="text-xs font-mono tracking-[0.2em] text-blue-500 uppercase mb-3">
          Trabajos
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Mis Proyectos
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="group relative flex flex-col rounded-2xl border border-black/[0.1] dark:border-white/[0.07] bg-white dark:bg-[#0c1628] overflow-hidden cursor-pointer shadow-md dark:shadow-none hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-400"
            onClick={() => setSelectedProject(project)}
          >
            {/* ── Image ── */}
            <div className="relative h-48 overflow-hidden flex-shrink-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              {/* fade image into card bg */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-white dark:to-[#0c1628]" />
              {/* project index */}
              <span className="absolute top-3 left-4 text-[11px] font-mono text-white/50 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* ── Content ── */}
            <div
              className="flex flex-col flex-1 px-5 pb-5"
            >
              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.languages.map((lang) => (
                  <span
                    key={lang}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-blue-500/20 dark:border-blue-400/15 text-blue-600 dark:text-blue-400/80 bg-blue-500/[0.05]"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed line-clamp-3 flex-1">
                {project.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-400 dark:text-slate-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>
                <span className="text-[12px] text-blue-500 dark:text-blue-400 translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-250">
                  Ver detalles →
                </span>
              </div>
            </div>
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
