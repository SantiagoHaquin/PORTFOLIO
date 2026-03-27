import { motion } from "framer-motion";
import { PiGraduationCapBold } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";

const education = [
  {
    period: "Feb 2026 — Actualidad",
    title: "Tecnicatura Universitaria en Inteligencia Artificial",
    institution: "Universidad Nacional Rosario",
    description:
      "Iniciando la carrera donde implementaré conocimientos sobre data science, procesamiento de datos y habilidades para diseñar y desarrollar sistemas y/o modelos de Inteligencia Artificial.",
    current: true,
  },
  {
    period: "Ene 2025 — Mar 2025",
    title: "Curso de Desarrollo Mobile con React Native",
    institution: "Coderhouse",
    description:
      "Desarrollo de aplicaciones móviles con React Native, gestión del estado global con Redux e integración de bases de datos y autenticación con Firebase.",
    current: false,
  },
  {
    period: "Feb 2023 — Nov 2024",
    title: "Tecnicatura Universitaria en Programación",
    institution: "Universidad Tecnológica Nacional",
    description:
      "Carrera finalizada con formación en desarrollo web y software: React.js, .NET, C#, Tailwind CSS, Entity Framework, JavaScript, Bootstrap, MySQL, Python y Git/GitHub.",
    current: false,
  },
];

const experience = [
  {
    period: "Mar 2025 — Actualidad",
    title: "Desarrollador Web & Mobile",
    institution: "Fiaca Studio",
    description:
      "Desarrollo front-end y back-end de sitios web (landing pages, e-commerce, institucionales) y apps. Trabajo junto al área de diseño para implementar interfaces responsivas y optimizadas. Participación en decisiones técnicas y acompañamiento en entregas finales.",
    current: true,
  },
  {
    period: "Jun 2025 — Actualidad",
    title: "Desarrollador de Software Freelance",
    institution: "Clientes & Empresas",
    description:
      "Desarrollo de soluciones de software para clientes y empresas: aplicaciones web y de escritorio usando .NET, React, Python, bases de datos SQL y Docker para desarrollo y despliegue.",
    current: true,
  },
];

const itemVariants = {
  hidden:  { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

function TimelineItem({ item, index, side }) {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="relative pl-6 pb-8 last:pb-0"
    >
      {/* vertical line */}
      <div className="absolute left-0 top-1.5 bottom-0 w-px bg-black/[0.07] dark:bg-white/[0.07] last:hidden" />

      {/* dot */}
      <div className={`absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
        item.current
          ? "border-blue-500 bg-blue-500/20"
          : "border-gray-300 dark:border-slate-600 bg-white dark:bg-[#060912]"
      }`} />

      {/* period + badge */}
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-[11px] font-mono text-gray-400 dark:text-slate-500">
          {item.period}
        </span>
        {item.current && (
          <span className="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 uppercase">
            En curso
          </span>
        )}
      </div>

      {/* title */}
      <h3 className="text-[15px] font-bold text-gray-900 dark:text-white leading-snug mb-0.5">
        {item.title}
      </h3>

      {/* institution */}
      <p className="text-xs font-medium text-blue-500/80 dark:text-blue-400/70 mb-2">
        {item.institution}
      </p>

      {/* description */}
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

function Trayectory() {
  return (
    <div className="py-24 px-4 md:px-12">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-mono tracking-[0.2em] text-blue-500 uppercase mb-3">
          Trayectoria
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Educación & Experiencia
        </h2>
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {/* Education */}
        <div className="rounded-2xl border border-black/[0.1] dark:border-white/[0.07] bg-white dark:bg-[#0c1628] shadow-md dark:shadow-none p-7">
          <div className="flex items-center gap-2 mb-7">
            <PiGraduationCapBold className="text-blue-500 text-lg" />
            <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-gray-400 dark:text-slate-500">
              Educación
            </p>
          </div>
          {education.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} side="left" />
          ))}
        </div>

        {/* Experience */}
        <div className="rounded-2xl border border-black/[0.1] dark:border-white/[0.07] bg-white dark:bg-[#0c1628] shadow-md dark:shadow-none p-7">
          <div className="flex items-center gap-2 mb-7">
            <MdWorkOutline className="text-blue-500 text-lg" />
            <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-gray-400 dark:text-slate-500">
              Experiencia
            </p>
          </div>
          {experience.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} side="right" />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Trayectory;
