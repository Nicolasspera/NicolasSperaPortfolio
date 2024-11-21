import React from 'react';
import { FaWhatsapp, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href }) => (
  <a 
    href={href} 
    className="flex items-center space-x-3 text-xl hover:text-blue-400 transition-colors duration-300"
    target="_blank" 
    rel="noopener noreferrer"
  >
    {icon}
    <span>{text}</span>
  </a>
);

const Contact = () => {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Contacto</h2>
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactItem 
            icon={<FaWhatsapp className="text-2xl" />}
            text="WhatsApp"
            href="https://wa.me/541122719813"
          />
          <ContactItem 
            icon={<FaGithub className="text-2xl" />}
            text="GitHub"
            href="https://github.com/Nicolasspera"
          />
        <ContactItem
            icon={<FaEnvelope className="text-2xl" />}
            text="Email"
            href="mailto:nicolasspera@outlook.com"
/>
          <ContactItem 
            icon={<FaLinkedin className="text-2xl" />}
            text="LinkedIn"
            href="https://www.linkedin.com/in/nicolas-spera-163a43195/"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

