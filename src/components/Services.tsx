import React from 'react';
import { Baby, Users, Mic, Brain, Utensils, Smile } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "Deglución Infantil",
      description: "Tratamiento especializado para problemas de deglución en niños, mejorando la alimentación y el desarrollo oral.",
      features: ["Evaluación completa", "Ejercicios miofuncionales", "Seguimiento familiar", "Técnicas lúdicas"]
    },
    {
      icon: Users,
      title: "Disfagia Adulta",
      description: "Rehabilitación de la deglución en adultos, especialmente tras accidentes cerebrovasculares o enfermedades neurológicas.",
      features: ["Valoración neurológica", "Adaptación dietética", "Ejercicios específicos", "Seguimiento médico"]
    },
    {
      icon: Mic,
      title: "Articulación y Fonética",
      description: "Corrección de problemas de pronunciación y articulación para mejorar la claridad del habla.",
      features: ["Análisis fonético", "Ejercicios articulatorios", "Práctica funcional", "Generalización"]
    },
    {
      icon: Brain,
      title: "Entrenamiento Vocal",
      description: "Terapia vocal para profesionales de la voz y personas con alteraciones vocales.",
      features: ["Higiene vocal", "Técnica respiratoria", "Ejercicios vocales", "Prevención lesiones"]
    },
    {
      icon: Utensils,
      title: "Terapia Miofuncional",
      description: "Especialidad en reeducación de la musculatura orofacial para mejorar funciones como masticación y deglución.",
      features: ["Evaluación muscular", "Ejercicios específicos", "Corrección postural", "Resultados duraderos"]
    },
    {
      icon: Smile,
      title: "Rehabilitación Facial",
      description: "Tratamiento de parálisis facial y alteraciones de la musculatura facial.",
      features: ["Estimulación muscular", "Ejercicios faciales", "Recuperación funcional", "Apoyo emocional"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Servicios Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrezco una amplia gama de servicios de logopedia adaptados a las necesidades específicas de cada paciente, desde niños hasta adultos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mb-6">
                  <IconComponent className="w-8 h-8 text-purple-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a 
                    href={"https://wa.me/34614417513?text=Hola%20Alexandra,%20me%20interesa%20el%20servicio%20de%20" + encodeURIComponent(service.title)}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    Consultar servicio
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;