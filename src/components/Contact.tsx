import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsApp from './WhatsAppIcon';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contacta Conmigo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estoy aquí para ayudarte. Contacta conmigo para resolver tus dudas o reservar una consulta en Segovia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <a href="tel:614417513" className="text-purple-600 hover:text-purple-700 transition-colors">
                      614 41 75 13
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:alexandrapz.logopeda@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      alexandrapz.logopeda@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ubicación</h4>
                    <p className="text-gray-600">
                      Clínica Dra. Díaz Sastre<br />
                      Segovia, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horarios</h4>
                    <div className="text-gray-600">
                      <p>Lunes a Viernes: 9:00 - 19:00</p>
                      <p>Sábados: 9:00 - 14:00</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mx-auto mb-6">
                  <WhatsApp className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contacto Directo por WhatsApp
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  La forma más rápida y cómoda de contactar conmigo. Te responderé lo antes posible para resolver tus dudas o programar tu cita.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/34614417513?text=Hola%20Alexandra,%20me%20gustaría%20reservar%20una%20consulta"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Reservar Consulta
                  </a>
                  
                  <a 
                    href="https://wa.me/34614417513?text=Hola%20Alexandra,%20tengo%20algunas%20preguntas%20sobre%20tus%20servicios"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full border-2 border-green-500 text-green-600 px-8 py-4 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold"
                  >
                    Hacer Consulta
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                ¿Por qué elegir WhatsApp?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Respuesta Rápida</h4>
                  <p className="text-gray-600 text-sm">Te respondo en el menor tiempo posible</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Comunicación Directa</h4>
                  <p className="text-gray-600 text-sm">Habla directamente conmigo sin intermediarios</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fácil y Cómodo</h4>
                  <p className="text-gray-600 text-sm">Desde cualquier lugar y en cualquier momento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;