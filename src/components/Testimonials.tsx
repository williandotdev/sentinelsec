
import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "A consultoria de segurança cloud da equipe do Ricardo transformou nossa infraestrutura AWS. Reduzimos custos em 40% enquanto aumentamos significativamente nossa postura de segurança.",
    author: "Carlos Santos",
    role: "CTO, TechCorp Brasil",
    company: "Empresa de Software",
    rating: 5
  },
  {
    content: "O pentest realizado revelou vulnerabilidades críticas que não sabíamos que existiam. O relatório técnico foi excepcional e as recomendações práticas foram fundamentais para nossa conformidade.",
    author: "Ana Silva",
    role: "CISO, FinanceSecure",
    company: "Setor Financeiro", 
    rating: 5
  },
  {
    content: "Implementação impecável do Active Directory e soluções de segurança on-premise. Equipe técnica altamente qualificada e comunicação clara durante todo o projeto.",
    author: "Roberto Lima",
    role: "Gerente de TI, Indústria XYZ",
    company: "Setor Industrial",
    rating: 5
  },
  {
    content: "O diagnóstico de vulnerabilidades web e o selo de segurança nos deram a confiança necessária para expandir nosso e-commerce. Monitoramento contínuo excepcional.",
    author: "Mariana Costa",
    role: "CEO, E-commerce Plus",
    company: "Varejo Online",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-900" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-6">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-2 text-xs">04</span>
            <span>Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que nossos <span className="text-blue-400">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados comprovados em segurança e infraestrutura de TI para empresas de diversos setores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-blue-400 mr-4" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-slate-700 pt-6">
                <h4 className="font-semibold text-white text-lg">{testimonial.author}</h4>
                <p className="text-blue-400 font-medium">{testimonial.role}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
