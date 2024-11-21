import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Herramientas from './components/Herramientas'
import Educacion from './components/Educacion'

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Herramientas />
        <Experience />
        <Projects />
        <Educacion/>
        <Contact />
      </main>
    </div>
  );
}

export default App;

