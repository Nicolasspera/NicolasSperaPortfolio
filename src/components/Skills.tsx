import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';

interface SkillProps {
  name: string;
  icon: React.ReactNode;
}

const SkillItem: React.FC<SkillProps> = ({ name, icon }) => (
  <div className="flex items-center space-x-4 bg-gray-800 rounded-lg p-4 transition-all duration-300 hover:bg-gray-700">
    <div className="text-4xl text-blue-400">{icon}</div>
    <span className="text-lg font-medium">{name}</span>
  </div>
);

const Skills: React.FC = () => {
  const skills: SkillProps[] = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <FaCode /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MySQL', icon: <FaDatabase /> },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

