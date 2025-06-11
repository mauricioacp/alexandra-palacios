import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import WhatsApp from './WhatsAppIcon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Alexandra Palacios</h3>
                <p className="text-purple-400">Logopeda Especialista</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Más de 17 años transformando la comunicación de niños y adultos en Segovia con terapia miofuncional especializada.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Deglución Infantil</li>
              <li>Disfagia Adulta</li>
              <li>Articulación y Fonética</li>
              <li>Entrenamiento Vocal</li>
              <li>Terapia Miofuncional</li>
              <li>Rehabilitación Facial</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:614417513" className="hover:text-purple-400 transition-colors">
                  614 41 75 13
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:alexandrapz.logopeda@gmail.com" className="hover:text-purple-400 transition-colors">
                  alexandrapz.logopeda@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Clínica Dra. Díaz Sastre, Segovia</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <div className="space-y-2 text-gray-400">
              <div>
                <span className="font-medium">Lunes - Viernes</span>
                <br />
                <span>9:00 - 19:00</span>
              </div>
              <div>
                <span className="font-medium">Sábados</span>
                <br />
                <span>9:00 - 14:00</span>
              </div>
              <div>
                <span className="font-medium">Domingos</span>
                <br />
                <span>Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 Alexandra Palacios. Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>en Segovia</span>
            </div>
          </div>
        </div>

        {/* Quick Contact Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://wa.me/34614417513?text=Hola%20Alexandra,%20me%20gustaría%20reservar%20una%20consulta"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Contactar por WhatsApp"
          >
            <WhatsApp className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;