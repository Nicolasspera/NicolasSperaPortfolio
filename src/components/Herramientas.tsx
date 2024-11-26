import React from 'react';
import { FaGitAlt, FaGithub, FaApple, FaServer, FaBootstrap, FaPaperPlane } from 'react-icons/fa';

interface ToolProps {
  name: string;
  icon: React.ReactNode;
}

const ToolItem: React.FC<ToolProps> = ({ name, icon }) => (
  <div className="flex items-center space-x-4 bg-gray-800 rounded-lg p-4 transition-all duration-300 hover:bg-gray-700">
    <div className="text-3xl text-blue-400">{icon}</div>
    <span className="text-lg font-medium">{name}</span>
  </div>
);

const Tools: React.FC = () => {
  const tools: ToolProps[] = [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Apache', icon: <FaServer /> },
    { name: 'Nginx', icon: <FaServer /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'Postman', icon: <FaPaperPlane /> },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Herramientas</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <ToolItem key={index} name={tool.name} icon={tool.icon} />
        ))}
      </div>
    </section>
  );
};

export default Tools;

