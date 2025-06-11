import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Sesión Individual",
      price: "40",
      description: "Sesión personalizada de 45 minutos",
      features: [
        "Evaluación personalizada",
        "Tratamiento individualizado",
        "Ejercicios específicos",
        "Seguimiento detallado",
        "Material terapéutico incluido"
      ],
      popular: false
    },
    {
      name: "Valoración Completa",
      price: "100",
      description: "Evaluación integral inicial",
      features: [
        "Anamnesis detallada",
        "Exploración completa",
        "Pruebas específicas",
        "Informe diagnóstico",
        "Plan de tratamiento",
        "Orientaciones familiares"
      ],
      popular: true
    },
    {
      name: "Tratamiento Neurológico",
      price: "40-75",
      description: "Sesiones especializadas según complejidad",
      features: [
        "Evaluación neurológica",
        "Técnicas especializadas",
        "Adaptación continua",
        "Coordinación médica",
        "Seguimiento intensivo"
      ],
      popular: false
    },
    {
      name: "Sesión Grupal",
      price: "35",
      description: "Por persona en grupos reducidos",
      features: [
        "Máximo 4 personas",
        "Dinámicas grupales",
        "Interacción social",
        "Ejercicios colaborativos",
        "Ambiente motivador"
      ],
      popular: false
    }
  ];

  return (
    <section id="precios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tarifas Transparentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precios claros y competitivos para todos nuestros servicios. Consulta disponible en la Clínica Dra. Díaz Sastre en Segovia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
              plan.popular ? 'ring-2 ring-purple-600 scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Más Popular</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">€</span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`https://wa.me/34614417513?text=Hola%20Alexandra,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(plan.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl' 
                      : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                  }`}
                >
                  Reservar Cita
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              ¿Necesitas más información?
            </h3>
            <p className="text-gray-600 mb-6">
              Cada caso es único. Contacta conmigo para una valoración personalizada y un plan de tratamiento adaptado a tus necesidades específicas.
            </p>
            <a 
              href="https://wa.me/34614417513?text=Hola%20Alexandra,%20me%20gustaría%20más%20información%20sobre%20los%20precios%20y%20servicios"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Consulta Personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;