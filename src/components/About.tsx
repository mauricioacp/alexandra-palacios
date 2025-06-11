import React from 'react';
import { GraduationCap, Heart, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    "Graduada en Logopedia por la Universidad de Valladolid",
    "Especialización en Terapia Miofuncional",
    "Formación continua en técnicas de deglución",
    "Experiencia en rehabilitación neurológica",
    "Tratamiento integral de disfagias",
    "Terapia vocal profesional"
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-purple-600">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Sobre Alexandra Palacios</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Dedicada a mejorar la calidad de vida a través de la comunicación
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Con más de 17 años de experiencia clínica, me especializo en terapia miofuncional y rehabilitación del habla. Mi enfoque personalizado y basado en evidencia científica ha ayudado a cientos de pacientes en Segovia a superar sus dificultades de comunicación.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trabajo tanto con niños como con adultos, adaptando cada tratamiento a las necesidades específicas de cada paciente. Mi consulta en la Clínica Dra. Díaz Sastre está equipada con la última tecnología para ofrecer los mejores resultados.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Formación Especializada</h3>
                </div>
                <p className="text-gray-600">
                  Graduada en Logopedia con especialización en terapia miofuncional y formación continua en las últimas técnicas de rehabilitación.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Enfoque Personalizado</h3>
                </div>
                <p className="text-gray-600">
                  Cada tratamiento se adapta a las necesidades específicas del paciente, garantizando resultados efectivos y duraderos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-purple-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Atención Integral</h3>
                </div>
                <p className="text-gray-600">
                  Tratamiento completo que abarca desde la evaluación inicial hasta el seguimiento post-tratamiento para asegurar el éxito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;