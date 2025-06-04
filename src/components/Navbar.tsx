import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300", isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800" : "bg-transparent")}>
      <div className="container flex items-center justify-between sm:px-8 lg:px-12 px">
        <a href="#" className="flex items-center space-x-3" onClick={e => {
        e.preventDefault();
        scrollToTop();
      }} aria-label="Segurança de TI">
          <div className="w-30 h-50 flex items-center justify-center">
            <img alt="Logo" className="w-8 h-8 object-contain" src="/lovable-uploads/b1c11d31-0b1d-47f1-8c70-aeab04e1753c.png" />
          </div>
          <div>
            
            <div className="text-blue-400 text-xs">
          </div>
          </div>
        </a>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-blue-400 py-2 transition-colors duration-300" onClick={e => {
          e.preventDefault();
          scrollToTop();
        }}>
            Início
          </a>
          <a href="#services" className="text-white hover:text-blue-400 py-2 transition-colors duration-300">Serviços</a>
          <a href="#about" className="text-white hover:text-blue-400 py-2 transition-colors duration-300">Sobre</a>
          <a href="#testimonials" className="text-white hover:text-blue-400 py-2 transition-colors duration-300">Depoimentos</a>
          <a href="#contact" className="text-white hover:text-blue-400 py-2 transition-colors duration-300">Contato</a>
        </nav>

        <button className="md:hidden text-white p-3 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={cn("fixed inset-0 z-40 bg-slate-900 flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out", isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none")}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a href="#" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-slate-800 text-white" onClick={e => {
          e.preventDefault();
          scrollToTop();
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            Início
          </a>
          <a href="#services" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-slate-800 text-white" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            Serviços
          </a>
          <a href="#about" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-slate-800 text-white" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            Sobre
          </a>
          <a href="#testimonials" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-slate-800 text-white" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            Depoimentos
          </a>
          <a href="#contact" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-slate-800 text-white" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            Contato
          </a>
        </nav>
      </div>
    </header>;
};
export default Navbar;