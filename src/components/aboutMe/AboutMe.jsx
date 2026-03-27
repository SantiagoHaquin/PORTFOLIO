import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { PiGraduationCapBold, PiTranslate } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
import { LuBrain } from "react-icons/lu";

const details = [
  {
    icon: IoLocationOutline,
    label: "Ubicación",
    value: "Funes, Santa Fe, Argentina",
  },
  {
    icon: PiGraduationCapBold,
    label: "Educación",
    value: "TUP (Tecnicatura Universitaria en Programación — UNR)",
  },
  {
    icon: MdWorkOutline,
    label: "Actualmente",
    value: "Fiaca Studio + Freelance",
  },
  {
    icon: LuBrain,
    label: "Estudiando",
    value: "TUIA (Tecnicatura en Inteligencia Artificial — UNR)",
  },
  {
    icon: PiTranslate,
    label: "Idiomas",
    value: "Español · Portugués · Inglés",
  },
];

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

function AboutMe() {
  return (
    <div className="py-24 px-4 md:px-12">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-mono tracking-[0.2em] text-blue-500 uppercase mb-3">
          Sobre mí
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          ¿Quién soy?
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-2xl border border-black/[0.1] dark:border-white/[0.07] bg-white dark:bg-[#0c1628] shadow-md dark:shadow-none overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">

            {/* Bio */}
            <div className="flex-1 p-8 lg:p-10 lg:border-r border-black/[0.1] dark:border-white/[0.07]">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Santiago Haquin Lo Valvo
              </h3>
              <p className="text-sm font-mono text-blue-500 mb-6">Desarrollador de Software</p>

              <div className="space-y-4 text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
                <p>
                  Soy un desarrollador de 21 años con una fuerte pasión por construir software
                  que combine funcionalidad y buen diseño. Egresé de la{" "}
                  <span className="text-gray-800 dark:text-slate-200 font-medium">
                    Tecnicatura Universitaria en Programación
                  </span>{" "}
                  en la UTN y actualmente estoy iniciando la{" "}
                  <span className="text-gray-800 dark:text-slate-200 font-medium">
                    Tecnicatura en Inteligencia Artificial
                  </span>{" "}
                  en la UNR.
                </p>
                <p>
                  Trabajo como{" "}
                  <span className="text-gray-800 dark:text-slate-200 font-medium">
                    colaborador en Fiaca Studio
                  </span>
                  , donde desarrollo sitios web y aplicaciones mobile, y también como{" "}
                  <span className="text-gray-800 dark:text-slate-200 font-medium">
                    freelance
                  </span>{" "}
                  creando soluciones a medida para clientes y empresas usando .NET, React,
                  Python y Docker.
                </p>
                <p>
                  Mi objetivo es seguir creciendo dentro del mundo del desarrollo de software,
                  aportando a equipos que valoren la calidad técnica y los proyectos con impacto real.
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="lg:w-72 p-8 lg:p-10 flex flex-col gap-5">
              <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-gray-400 dark:text-slate-500 mb-1">
                Detalles
              </p>
              {details.map((d, i) => (
                <motion.div
                  key={d.label}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-7 h-7 flex items-center justify-center rounded-lg bg-blue-500/10 flex-shrink-0">
                    <d.icon className="text-blue-500 text-sm" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-gray-400 dark:text-slate-500 mb-0.5">
                      {d.label}
                    </p>
                    <p className="text-sm font-medium text-gray-700 dark:text-slate-300">
                      {d.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
