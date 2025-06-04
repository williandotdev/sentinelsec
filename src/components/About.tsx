import React from "react";
import { Award, Users, Zap, CheckCircle } from "lucide-react";
const About = () => {
  const achievements = [{
    icon: Award,
    title: "Certificações Avançadas",
    description: "Múltiplas certificações em segurança ofensiva e defensiva"
  }, {
    icon: Users,
    title: "Experiência Corporativa",
    description: "Anos de experiência em ambientes enterprise complexos"
  }, {
    icon: Zap,
    title: "Cloud Computing",
    description: "Especialista em AWS, Azure e Google Cloud Platform"
  }, {
    icon: CheckCircle,
    title: "Redes Corporativas",
    description: "Implementação e gestão de infraestruturas críticas"
  }];
  const differentials = ["Liderança técnica com expertise comprovada", "Soluções sob medida para empresas de todos os portes", "Transparência e comunicação clara em linguagem técnica", "Entrega de resultados práticos e mensuráveis", "Suporte contínuo e relacionamento de longo prazo", "Metodologias reconhecidas internacionalmente"];
  return <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Nossos Diferenciais</h3>
            
            <div className="space-y-4">
              {differentials.map((differential, index) => <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{differential}</p>
                </div>)}
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
    </section>;
};
export default About;