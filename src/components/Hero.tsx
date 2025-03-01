import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      // Slightly reduced rotation effect for smoother movement
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section className="pt-40 md:pt-48 pb-16 overflow-hidden relative bg-cover bg-center" id="hero" style={{
    backgroundImage: 'url("/Header-background.png")'
  }}>
      {/* Background gradient */}
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-6 lg:px-8" ref={containerRef}>
        {/* Changed from grid to flex for side-by-side layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          <div className="w-full lg:w-1/2">
            <div className="pulse-chip mb-6 opacity-0 animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
              <span>Purpose</span>
            </div>
            
            <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl leading-tight opacity-0 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              Atlas: Where Code<br />Meets Motion
            </h1>
            
            <p style={{
            animationDelay: "0.5s"
          }} className="section-subtitle mt-6 mb-8 leading-relaxed opacity-0 animate-fade-in font-medium my-[23px] text-left text-gray-950">
              The humanoid companion that learns and adapts alongside you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{
            animationDelay: "0.7s"
          }}>
              <a href="#get-access" className="button-primary flex items-center justify-center group">
                Request Access
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-dark-900 rounded-3xl -z-10 shadow-xl"></div>
            <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-3xl shadow-2xl">
              <img ref={imageRef} src="/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png" alt="Atlas Robot" className="w-full h-auto object-cover transition-transform duration-500 ease-out" style={{
              transformStyle: 'preserve-3d'
            }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>;
};
export default Hero;