import React from 'react';

interface SkillBarProps {
  technologies: string[]; // Tecnologías relacionadas
}

const SkillBar: React.FC<SkillBarProps> = ({technologies }) => (
  <div className="mb-4">

    {/* Tecnologías relacionadas */}
    <div className="flex flex-wrap gap-2 mt-2">
      {technologies.map((tech, techIndex) => (
        <span key={techIndex} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

// Componente principal
const Skills = () => {
  // Habilidades y tecnologías relacionadas
  const skills = [
    {technologies: ['Git', 'GitHub', 'Apache', 'Nginx','Bootstrap', 'Postman'] }
    
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Herramientas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillBar
            key={index}
          
            technologies={skill.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
