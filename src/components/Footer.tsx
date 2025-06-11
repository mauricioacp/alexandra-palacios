import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

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
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;