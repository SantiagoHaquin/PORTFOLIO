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
  SiRedux,
} from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "React",        icon: FaReact,            color: "#61DAFB" },
      { name: "React Native", icon: TbBrandReactNative,  color: "#61DAFB" },
      { name: "JavaScript",   icon: SiJavascript,        color: "#F7DF1E" },
      { name: "HTML",         icon: FaHtml5,             color: "#E34F26" },
      { name: "CSS",          icon: FaCss3Alt,           color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss,       color: "#38BDF8" },
      { name: "Bootstrap",    icon: FaBootstrap,         color: "#7952B3" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: ".NET Core", icon: SiDotnet,  color: "#512BD4" },
      { name: "Python",    icon: FaPython,  color: "#3776AB" },
    ],
  },
  {
    label: "Base de datos",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    label: "Estado & Herramientas",
    skills: [
      { name: "Redux",         icon: SiRedux,          color: "#764ABC" },
      { name: "GitHub",        icon: IoLogoGithub,     color: "#f0f6fc" },
      { name: "VS Code",       icon: SiVisualstudiocode, color: "#007ACC" },
      { name: "Visual Studio", icon: SiVisualstudio,   color: "#B262F5" },
    ],
  },
];

const allSkills = categories.flatMap((c) => c.skills);

const badgeVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

function Skills() {
  return (
    <div className="py-24 px-4 md:px-12">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-mono tracking-[0.2em] text-blue-500 uppercase mb-3">
          Conocimientos
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Stack & Herramientas
        </h2>
      </div>

      {/* Skills grid */}
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {allSkills.map((skill, i) => (
          <motion.div
            key={skill.name}
            custom={i}
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <SkillBadge skill={skill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SkillBadge({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="group flex items-center gap-2 px-3 py-2 rounded-xl border border-black/[0.1] dark:border-white/[0.07] bg-white dark:bg-white/[0.03] shadow-sm dark:shadow-none cursor-default select-none"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      style={{ "--brand": skill.color }}
    >
      <Icon
        className="text-base flex-shrink-0 text-gray-400 dark:text-slate-400 transition-colors duration-200 group-hover:text-[var(--brand)]"
      />
      <span className="text-sm font-medium text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200 whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default Skills;
