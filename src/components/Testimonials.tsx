import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de paciente",
      content: "Alexandra ha sido fundamental en el desarrollo de mi hijo. Su paciencia y profesionalidad han logrado resultados increíbles en solo unos meses.",
      rating: 5
    },
    {
      name: "Carlos Martín",
      role: "Paciente adulto",
      content: "Después de mi accidente cerebrovascular, Alexandra me ayudó a recuperar mi capacidad de hablar. Su método es efectivo y muy humano.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      role: "Profesora",
      content: "Como profesional de la voz, necesitaba ayuda especializada. El tratamiento vocal de Alexandra me devolvió la confianza en mi trabajo.",
      rating: 5
    },
    {
      name: "Luis Fernández",
      role: "Padre de paciente",
      content: "La terapia miofuncional ha transformado la alimentación de nuestra hija. Alexandra es una profesional excepcional.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen mis pacientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de mis pacientes es mi mayor recompensa. Aquí tienes algunos testimonios de personas que han mejorado su calidad de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Quote className="w-6 h-6 text-purple-600" />
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Basado en más de 200 valoraciones de pacientes satisfechos
            </p>
            <a 
              href="https://wa.me/34614417513?text=Hola%20Alexandra,%20me%20gustaría%20conocer%20más%20sobre%20tus%20servicios"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Únete a nuestros pacientes satisfechos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;