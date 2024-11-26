import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="min-h-screen">
      <motion.div
        className="max-w-3xl bg-[#08132b] text-gray-800 py-8 px-4 sm:px-6 md:px-16 rounded-badge mx-auto mt-20 sm:mt-24 md:mt-28 mb-20 sm:mb-24 md:mb-32"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-8 border-b-2 border-slate-300 pb-3 sm:pb-4 text-sky-500">
          Sobre mí...
        </h2>
        <div className="space-y-3 sm:space-y-4 md:space-y-6 text-white">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Soy <span className="font-semibold text-sky-500">Santiago</span>, un desarrollador apasionado de 19 años, egresado de la{" "}
            <span className="font-semibold text-sky-500">Tecnicatura Universitaria en Programación</span> en la Universidad Tecnológica Nacional. Me encanta trabajar en proyectos que combinan creatividad y tecnología, siempre buscando soluciones innovadoras.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Cuento con experiencia en tecnologías como{" "}
            <span className="font-semibold text-sky-500">React, JavaScript, C, Python, HTML, CSS</span> y{" "}
            <span className="font-semibold text-sky-500">.NET</span>. Me especializo en construir aplicaciones modernas con un enfoque en diseño atractivo y funcionalidad.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Mi objetivo es seguir creciendo como desarrollador, afrontando nuevos desafíos y contribuyendo a proyectos que generen un impacto positivo. En mi tiempo libre, disfruto explorando herramientas emergentes y trabajando en ideas que me ayuden a mejorar continuamente.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
