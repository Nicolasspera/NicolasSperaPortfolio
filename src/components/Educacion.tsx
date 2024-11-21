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
      title: 'Escuela educacion media N°1',
      company: 'Bachiller con orientación en Gestión y Administración de empresas.',
      period: '2011 - 2016',
      description: ''
    },
    {
      title: 'Universidad Desarrollo Web Udemy ',
      company: ' Fernando Herrera',
      period: '01/2023 - 03/2023',
      description: 'HTML , CSS , JAVASCRIPT'
    },
    {
        title: 'Universidad Desarrollo Web Udemy ',
        company: ' Fernando Herrera',
        period: '03/2023 - 12/2023',
        description: 'React, Typescrypt, NodeJS'
      },
    // Añade más experiencias aquí
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Educacion</h2>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </section>
  );
};

export default Experience;

