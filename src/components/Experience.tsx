import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, period, description }) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-6 transform hover:scale-105 transition-all duration-300">
    <h3 className="text-2xl font-semibold text-blue-400">{title}</h3>
    <p className="text-gray-400 mb-2">{company} | {period}</p>
    <p className="text-gray-300">{description}</p>
  </div>
);

// ... rest of the file remains the same

const Experience = () => {
  const experiences = [
    {
      title: 'Desarrollador Freelancer',
      company: '',
      period: '06/2024 - Actualmente',
      description: 'Desarrollo de proyectos web utilizando tecnologías modernas como React, Node.js y MySQL. Implementación de soluciones de automatización y despliegue eficiente de aplicaciones.'
    },
    {
      title: 'Vendedor',
      company: 'Easy',
      period: '12/2023 - Actualmente',
      description: 'Atención al cliente, asesoramiento técnico y manejo de herramientas especializadas para mejorar la experiencia de compra.'
    },
    // Añade más experiencias aquí
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Experiencia</h2>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </section>
  );
};

export default Experience;

