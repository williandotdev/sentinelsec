
import React from "react";
import { Award, Users, Zap, CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Certificações Avançadas",
      description: "Múltiplas certificações em segurança ofensiva e defensiva"
    },
    {
      icon: Users,
      title: "Experiência Corporativa",
      description: "Anos de experiência em ambientes enterprise complexos"
    },
    {
      icon: Zap,
      title: "Cloud Computing",
      description: "Especialista em AWS, Azure e Google Cloud Platform"
    },
    {
      icon: CheckCircle,
      title: "Redes Corporativas",
      description: "Implementação e gestão de infraestruturas críticas"
    }
  ];

  const differentials = [
    "Liderança técnica com expertise comprovada",
    "Soluções sob medida para empresas de todos os portes", 
    "Transparência e comunicação clara em linguagem técnica",
    "Entrega de resultados práticos e mensuráveis",
    "Suporte contínuo e relacionamento de longo prazo",
    "Metodologias reconhecidas internacionalmente"
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 mb-6">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-2 text-xs">03</span>
              <span>Nossa Expertise</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Liderados por <span className="text-blue-600">Ricardo Arrais</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Profissional com ampla experiência em segurança ofensiva, defensiva, cloud computing e redes corporativas. 
              Ricardo Arrais traz uma visão estratégica e técnica para proteger e otimizar ambientes de TI complexos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <achievement.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="https://www.linkedin.com/in/ricardo-arrais-5ba716149/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Ver Perfil LinkedIn
            </a>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Nossos Diferenciais</h3>
            
            <div className="space-y-4">
              {differentials.map((differential, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{differential}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-900 mb-2">Compromisso com a Excelência</h4>
              <p className="text-gray-700">
                Nossa missão é fornecer soluções de segurança que não apenas protegem, mas também impulsionam 
                o crescimento do seu negócio através de tecnologia confiável e eficiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
