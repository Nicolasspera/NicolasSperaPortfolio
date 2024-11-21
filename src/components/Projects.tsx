import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps & { url: string }> = ({ title, description, technologies, imageUrl, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-blue-400">{title}</h3>
        <p className={`mb-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>{description}</p>
        <div className="flex flex-wrap gap-2 mb-12"> {/* Espacio para el botón */}
          {technologies.map((tech, techIndex) => (
            <span key={techIndex} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-lg text-sm"
      >
        Visitar Página
      </a>
    </div>
  );
};



// ... rest of the file remains the same

const Projects = () => {
  const projects = [
    {
      title: 'Web Sorteos',
      description: 'Desarrollo de una plataforma de sorteos que permite a los usuarios realizar pagos a través de la API de Mercado Pago. Cada transacción aprobada se registra automáticamente, generando chances en función del monto pagado. La aplicación permite realizar sorteos desde la interfaz web, modificar productos, eliminar registros de la base de datos y ajustar una barra de porcentaje, todo de manera automatizada y accesible para el usuario.',
      technologies: ['React', 'Node.js', 'MySQL', 'Mercado Pago API'],
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pasBPiB3xVEAOZEw9Vpbt3TeyYz8UV.png',
      url: 'https://premiosyonivaldez.com/'
    },
    {
      title: 'Proyecto Clima',
      description: 'Landing page para un servicio de mantenimiento de aires acondicionados con diseño atractivo y fácil navegación.',
      technologies: ['HTML', 'CSS', 'React'],
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Lst1KG85eKPQSSlflCM8EpHXIZ5qFt.png',
      url: 'https://proyectoclima.com/'
    },
    {
      title: 'Clima Buenos Aires',
      description: 'Landing page para un servicio de mantenimiento de aires acondicionados con diseño atractivo y fácil navegación.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rwPgk2Neoz7Fzzyq23jGI3Js941P6S.png',
      url: 'https://climabuenosaires.com/'
    }
  ];
  

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Proyectos para clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
</div>

    </section>
  );
};

export default Projects;

