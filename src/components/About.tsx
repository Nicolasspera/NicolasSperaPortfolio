import React from 'react';

const About = () => {
  return (
    <section className="mb-16 bg-gray-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-14%20at%2017.26.23-osC8WepX3FDPa7xhlxCDO2Xkol60Wm.jpeg"
          alt="Nicolás Spera"
          className="w-32 h-32 rounded-full mr-6"
        />
        <div>
          <h2 className="text-4xl font-bold mb-6 text-blue-400">Sobre mí</h2>
          <p className="text-xl leading-relaxed">
            Soy un desarrollador web full stack apasionado por crear soluciones web innovadoras y eficientes. 
            Con experiencia en tecnologías front-end y back-end, me especializo en construir aplicaciones 
            web robustas y escalables. Mi enfoque se centra en la calidad del código, la experiencia del usuario 
            y la implementación de las mejores prácticas de desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

