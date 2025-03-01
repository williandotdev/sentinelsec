import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
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
      
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-orange-50 via-orange-200 to-orange-400" id="hero">
      <div className="container px-4 py-20 md:py-28 mx-auto" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6 gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-orange-500 text-orange-500 font-semibold">01</span>
              <span className="text-orange-500 font-medium border-2 border-orange-500 rounded-full px-4 py-1">Purpose</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
              Atlas: Where Code<br />Meets Motion
            </h1>
            
            <p className="text-xl md:text-2xl text-black/80 mb-10">
              The humanoid companion that learns and<br />adapts alongside you.
            </p>
            
            <a href="#get-access" className="inline-block bg-orange-500 text-white font-medium py-4 px-8 rounded-full hover:bg-orange-600 transition-colors">
              Request access
            </a>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                ref={imageRef}
                src="/lovable-uploads/9a5101bd-e69b-4130-afc1-8ad9f519397b.png"
                alt="Atlas Robot"
                className="w-full h-auto object-cover transition-transform duration-500 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
