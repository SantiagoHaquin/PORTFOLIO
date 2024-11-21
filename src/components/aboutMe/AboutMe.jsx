function AboutMe() {
  return (
    <section className="bg-[#08132b] rounded-badge text-gray-800 py-12 px-6 md:px-16 max-w-3xl mx-auto md:mt-12 mb-6 md:mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 border-b-2 border-slate-300 pb-4 text-sky-500">
        Sobre mí...
      </h2>
      <div className="space-y-4 md:space-y-6 text-white">
        <p className="text-base md:text-lg leading-relaxed">
          Soy <span className="font-semibold text-sky-500">Santiago</span>, un desarrollador apasionado de 19 años, egresado de la
          <span className="font-semibold text-sky-500"> Tecnicatura Universitaria en Programación</span> en la Universidad Tecnológica Nacional.
          Me encanta trabajar en proyectos que combinan creatividad y tecnología, siempre buscando soluciones innovadoras.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Cuento con experiencia en tecnologías como 
          <span className="font-semibold text-sky-500"> React, JavaScript, C, Python, HTML, CSS</span> y 
          <span className="font-semibold text-sky-500"> .NET</span>. Me especializo en construir aplicaciones modernas con un enfoque en diseño atractivo y funcionalidad.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Mi objetivo es seguir creciendo como desarrollador, afrontando nuevos desafíos y contribuyendo a proyectos que generen un impacto positivo. 
          En mi tiempo libre, disfruto explorando herramientas emergentes y trabajando en ideas que me ayuden a mejorar continuamente.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
