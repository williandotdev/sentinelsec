
import React, { useEffect, useRef, useState } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      // Start when the section enters viewport, end when it leaves
      let progress = 0;
      
      if (sectionTop <= windowHeight * 0.8) { // Start when 80% of the section is visible (previously 70%)
        // Calculate progress as percentage through the section, but slow it down
        // by dividing by a larger value (sectionHeight * 0.8 instead of 0.6)
        progress = Math.min(1, Math.max(0, (windowHeight * 0.8 - sectionTop) / (sectionHeight * 0.8)));
      }
      
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Define clear breakpoints for card transitions
  // Adjust these breakpoints to create a more gradual transition
  const secondCardVisible = scrollProgress >= 0.25; // Previously 0.33
  const thirdCardVisible = scrollProgress >= 0.6; // Previously 0.67
  
  return (
    <section className="w-full overflow-hidden py-16 md:py-24 relative" id="why-humanoid" ref={sectionRef}>
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="pulse-chip opacity-0 animate-fade-in" style={{
              animationDelay: "0.1s"
            }}>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Humanoid</span>
            </div>
          </div>
          
          <h2 className="section-title text-4xl sm:text-5xl font-display font-bold mb-8">
            Why Humanoid
          </h2>
        </div>
        
        {/* Stacking Cards Container */}
        <div className="relative h-[700px] perspective-1000">
          {/* Base Card - Always visible at the bottom of the stack */}
          <div 
            className="absolute w-full h-[600px] rounded-3xl overflow-hidden transition-all duration-1000"
            style={{
              zIndex: 10, // Always at the bottom
              transform: `scale(0.9)`,
              opacity: 0.9
            }}
          >
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80" style={{
              backgroundImage: "url('/background-section1.png')",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundBlendMode: "overlay"
            }}></div>
            
            {/* Button positioned in top right corner */}
            <div className="absolute top-4 right-4 z-20">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                <span className="text-sm font-medium">The vision</span>
              </div>
            </div>
            
            <div className="relative z-10 p-12 md:p-16 h-full flex items-center">
              <div className="max-w-lg">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-white font-bold leading-tight mb-6">
                  We're giving AI a way to navigate the physical world
                </h3>
              </div>
            </div>
          </div>
          
          {/* Second Card - Appears on scroll */}
          <div 
            className="absolute w-full h-[600px] rounded-3xl overflow-hidden transition-all duration-1000" 
            style={{
              zIndex: 20,
              transform: `translateY(${secondCardVisible ? 30 : 200}px) scale(0.95)`,
              opacity: secondCardVisible ? 1 : 0,
              pointerEvents: secondCardVisible ? 'auto' : 'none'
            }}
          >
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80" style={{
              backgroundImage: "url('/background-section2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay"
            }}></div>
            
            {/* Button positioned in top right corner */}
            <div className="absolute top-4 right-4 z-20">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                <span className="text-sm font-medium">The vision</span>
              </div>
            </div>
            
            <div className="relative z-10 p-12 md:p-16 h-full flex items-center">
              <div className="max-w-lg">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-white font-bold leading-tight mb-6">
                  We're bringing adaptive intelligence to where humans work
                </h3>
              </div>
            </div>
          </div>
          
          {/* Third Card - Appears on more scroll */}
          <div 
            className="absolute w-full h-[600px] rounded-3xl overflow-hidden transition-all duration-1000" 
            style={{
              zIndex: 30,
              transform: `translateY(${thirdCardVisible ? 60 : 200}px) scale(1)`,
              opacity: thirdCardVisible ? 1 : 0,
              pointerEvents: thirdCardVisible ? 'auto' : 'none'
            }}
          >
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80" style={{
              backgroundImage: "url('/background-section3.png')",
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
              backgroundBlendMode: "overlay"
            }}></div>
            
            {/* Button positioned in top right corner */}
            <div className="absolute top-4 right-4 z-20">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                <span className="text-sm font-medium">The vision</span>
              </div>
            </div>
            
            <div className="relative z-10 p-12 md:p-16 h-full flex items-center">
              <div className="max-w-lg">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-white font-bold leading-tight mb-6">
                  We're creating companions, <span className="text-[#FC4D0A]">not replacements</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidSection;
