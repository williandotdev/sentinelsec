import React, { useEffect, useRef, useState } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Keep the sticky behavior consistent
      const shouldBeSticky = sectionTop <= 0 && sectionTop > -sectionHeight * 2.5 + windowHeight;
      setIsSticky(shouldBeSticky);
      
      // Improve scroll progress calculation to ensure smooth transitions
      let progress = 0;
      
      if (sectionTop <= windowHeight * 0.9) {
        // Adjust multiplier to create a more linear progression through all cards
        progress = Math.min(1, Math.max(0, (windowHeight * 0.9 - sectionTop) / (sectionHeight * 1.8)));
      }
      
      console.log("Scroll progress:", progress);
      
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Adjust thresholds to create equal spacing between card transitions
  const secondCardVisible = scrollProgress >= 0.15;
  const thirdCardVisible = scrollProgress >= 0.40; // Lower threshold for third card
  
  return (
    <section 
      className={`w-full overflow-hidden py-16 md:py-24 relative ${isSticky ? 'sticky top-0 z-50' : ''}`} 
      id="why-humanoid" 
      ref={sectionRef}
      style={{ 
        height: isSticky ? '100vh' : 'auto',
        minHeight: '250vh', // Keep increased section height for longer scrolling
        transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
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
        
        {/* Stacking Cards Container - Make this sticky within the sticky section for double stickiness */}
        <div className="relative h-[700px] perspective-1000" style={{
          position: isSticky ? 'sticky' : 'relative',
          top: isSticky ? '10vh' : 'auto'
        }}>
          {/* Base Card - Always visible at the bottom of the stack */}
          <div 
            className="absolute w-full h-[600px] rounded-3xl overflow-hidden will-change-transform"
            style={{
              zIndex: 10, // Always at the bottom
              transform: `scale(0.9)`,
              opacity: 0.9,
              transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)'
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
            className="absolute w-full h-[600px] rounded-3xl overflow-hidden will-change-transform" 
            style={{
              zIndex: 20,
              transform: `translateY(${secondCardVisible ? 30 : 200}px) scale(0.95)`,
              opacity: secondCardVisible ? 1 : 0,
              pointerEvents: secondCardVisible ? 'auto' : 'none',
              transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)'
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
          
          {/* Third Card - Appears on more scroll - Fixed to match behavior of other cards */}
          <div 
            className="absolute w-full h-[600px] rounded-3xl overflow-hidden will-change-transform" 
            style={{
              zIndex: 30,
              transform: `translateY(${thirdCardVisible ? 60 : 200}px) scale(1)`,
              opacity: thirdCardVisible ? 1 : 0,
              pointerEvents: thirdCardVisible ? 'auto' : 'none',
              transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)'
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
