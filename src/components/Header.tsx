import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="bg-transparent py-12">
      <div className="container mx-auto px-4">
        <h1 className={`text-6xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Nicolás Spera
        </h1>
        <p className={`text-2xl text-blue-400 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          Desarrollador Web Full Stack
        </p>
      </div>
    </header>
  );
};

export default Header;

