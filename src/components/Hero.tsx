
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Shield, FileSearch } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 12px 60px' : '120px 20px 80px'
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 text-white">
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <Shield className="w-4 h-4 mr-2" />
              <span>Segurança & Infraestrutura de TI</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in mb-6" 
              style={{ animationDelay: "0.3s" }}
            >
              Proteja sua <span className="text-blue-400">infraestrutura</span> com expertise comprovada
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="text-xl mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-300 font-normal"
            >
              Proteja sua infraestrutura, otimize seus custos e garanta conformidade com as melhores práticas do mercado. Liderados por Ricardo Arrais, especialista em segurança ofensiva e defensiva.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#contact" 
                className="flex items-center justify-center group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <FileSearch className="mr-2 w-5 h-5" />
                Diagnóstico Gratuito
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center bg-transparent border-2 border-gray-300 hover:border-blue-400 text-white hover:text-blue-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                    <div className="text-green-400 text-2xl font-bold">99.9%</div>
                    <div className="text-green-300 text-sm">Uptime</div>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-center">
                    <div className="text-blue-400 text-2xl font-bold">24/7</div>
                    <div className="text-blue-300 text-sm">Monitoramento</div>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 font-mono text-green-400 text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Sistema seguro ativo</span>
                  </div>
                  <div className="text-gray-400">
                    $ security-scan --status<br/>
                    ✓ Firewall configurado<br/>
                    ✓ SSL/TLS ativo<br/>
                    ✓ Backup sincronizado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
