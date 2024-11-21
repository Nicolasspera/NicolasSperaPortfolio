import React from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-lg font-medium">{skill}</span>
      <span className="text-sm text-blue-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

// ... rest of the file remains the same

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'NodeJS', level: 70 },
    { name: 'MySQL', level: 65 },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

