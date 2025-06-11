import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Alexandra Palacios</h1>
              <p className="text-sm text-purple-600">Logopeda Especialista</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('sobre-mi')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Sobre Mí
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection('precios')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Precios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:614417513" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">614 41 75 13</span>
            </a>
            <a 
              href="https://wa.me/34614417513?text=Hola%20Alexandra,%20me%20gustaría%20reservar%20una%20consulta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Reservar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Inicio
              </button>
              <button onClick={() => scrollToSection('sobre-mi')} className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Sobre Mí
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Servicios
              </button>
              <button onClick={() => scrollToSection('precios')} className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Precios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Contacto
              </button>
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:614417513" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors mb-3">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">614 41 75 13</span>
                </a>
                <a 
                  href="https://wa.me/34614417513?text=Hola%20Alexandra,%20me%20gustaría%20reservar%20una%20consulta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium"
                >
                  Reservar Consulta
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;