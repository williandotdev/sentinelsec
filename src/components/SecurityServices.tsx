
import React from "react";
import { Shield, Search, Cloud, DollarSign, Server, Lock } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Scan de Vulnerabilidade Web",
    description: "Checagem única ou semanal com relatório técnico completo e selo de segurança. Foco especial na detecção da vulnerabilidade OWASP Top 10.",
    features: ["Relatório técnico detalhado", "Selo de segurança", "Monitoramento contínuo", "OWASP Top 10"]
  },
  {
    icon: Shield,
    title: "Pentest Profissional",
    description: "Testes de penetração completos com diferentes níveis de acesso para simular cenários reais de ataques.",
    features: ["Black Box - Teste externo", "Grey Box - Acesso parcial", "White Box - Acesso completo", "Laudo técnico detalhado"]
  },
  {
    icon: Cloud,
    title: "Consultoria de Segurança Cloud",
    description: "Implementação de boas práticas de segurança para AWS, Azure e Google Cloud com foco em compliance e monitoramento.",
    features: ["AWS, Azure, GCP", "Boas práticas de segurança", "Gestão de identidade", "Compliance e auditoria"]
  },
  {
    icon: DollarSign,
    title: "FinOps",
    description: "Diagnóstico e otimização de custos na nuvem com estratégias de governança para reduzir gastos sem comprometer performance.",
    features: ["Análise de custos", "Otimização de recursos", "Governança financeira", "Relatórios mensais"]
  },
  {
    icon: Server,
    title: "Segurança de Redes On-Premise",
    description: "Consultoria e implementação completa de soluções de segurança para ambientes corporativos locais.",
    features: ["Firewall corporativo", "Active Directory", "Servidor Samba", "Integração de sistemas"]
  },
  {
    icon: Cloud,
    title: "Gestão Cloud",
    description: "Gerenciamento completo de ambientes em nuvem (AWS, Azure e GCP), com foco em desempenho, escalabilidade, custos otimizados e operação contínua.",
    features: ["AWS, Azure, GCP", "Monitoramento e automação", "Otimização de custos", "Alta disponibilidade e performance"]
  }
];

const SecurityServices = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 mb-6">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-2 text-xs">02</span>
            <span>Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções Completas em <span className="text-blue-600">Segurança de TI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços especializados em segurança da informação e infraestrutura de TI para empresas de todos os portes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a 
                  href="#contact" 
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                >
                  Saiba mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityServices;
