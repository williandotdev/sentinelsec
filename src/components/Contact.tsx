import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, FileSearch } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode integrar com um serviço de e-mail ou CRM
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-6">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-2 text-xs">04</span>
            <span>Contato</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Receba um <span className="text-blue-400">diagnóstico gratuito</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Avalie a segurança do seu site ou ambiente cloud sem custo. Nossos especialistas estão prontos para ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Solicite seu diagnóstico</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome completo *
                  </label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Seu nome" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail corporativo *
                  </label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="seu@email.com" />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa *
                  </label>
                  <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Nome da empresa" />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                    Principal interesse *
                  </label>
                  <select id="interest" name="interest" required value={formData.interest} onChange={handleChange} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                    <option value="">Selecione um serviço</option>
                    <option value="scan-vulnerabilidade">Scan de Vulnerabilidade Web</option>
                    <option value="pentest">Pentest Profissional</option>
                    <option value="consultoria-cloud">Consultoria de Segurança Cloud</option>
                    <option value="finops">FinOps - Gestão Cloud</option>
                    <option value="redes-onpremise">Segurança de Redes On-Premise</option>
                    <option value="compliance">Compliance e Auditoria</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem adicional
                  </label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Descreva brevemente suas necessidades ou ambiente atual"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Send className="mr-2 w-5 h-5" />
                  Solicitar Diagnóstico Gratuito
                </button>
              </form>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Entre em contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">E-mail</h4>
                    <p className="text-gray-300">contato@segurancati.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Telefone</h4>
                    <p className="text-gray-300">+55 (11) 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Localização</h4>
                    <p className="text-gray-300">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <FileSearch className="w-8 h-8 text-blue-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Diagnóstico Rápido</h4>
              </div>
              <p className="text-blue-100 mb-4">
                Em até 24 horas após o contato, você receberá:
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Análise inicial do seu ambiente
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Identificação de riscos prioritários
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Recomendações personalizadas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Proposta comercial sob medida
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;