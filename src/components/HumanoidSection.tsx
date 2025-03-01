
import React, { useEffect, useRef, useState } from "react";
const HumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress based on how far we've scrolled through the section
      // We want the animation to happen over 2 viewport heights worth of scrolling
      const totalScrollDistance = viewportHeight * 2;

      // Start calculating progress once the section is at the top of the viewport
      let progress = 0;
      if (sectionRect.top <= 0) {
        progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
      }
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define thresholds for card visibility with more spacing
  const secondCardVisible = scrollProgress >= 0.33;
  const thirdCardVisible = scrollProgress >= 0.66;

  // Common card styling
  const cardStyle = {
    height: '60vh',
    // Reduced to 60vh for better fit
    maxHeight: '600px',
    // Reduced max height
    borderRadius: '20px',
    // Increased border radius for more modern look
    transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)'
  };
  return <div ref={sectionRef} className="relative" style={{
    height: '300vh' // Create scroll area that's 3x viewport height
  }}>
      {/* Fixed content container that actually sticks */}
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="why-humanoid">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-4 md:mb-6">
            <div className="flex items-center gap-4 mb-2 md:mb-4">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{
              animationDelay: "0.1s"
            }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
                <span>Humanoid</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2 md:mb-4">
              Why Humanoid
            </h2>
          </div>
          
          {/* Cards Container - This will be fixed but cards animate based on scroll */}
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* Base Card - Always visible at the bottom of the stack */}
            <div className="absolute inset-0 overflow-hidden will-change-transform shadow-xl" style={{
            ...cardStyle,
            zIndex: 10,
            transform: `translateY(${scrollProgress <= 0.33 ? 90 : 90}px) scale(0.9)`,
            opacity: 0.9
          }}>
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
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-white font-bold leading-tight mb-4">
                    We're giving AI a way to navigate the physical world
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Second Card - Appears on scroll */}
            <div className="absolute inset-0 overflow-hidden will-change-transform shadow-xl" style={{
            ...cardStyle,
            zIndex: 20,
            transform: `translateY(${secondCardVisible ? scrollProgress < 0.5 ? 55 : 45 : 200}px) scale(0.95)`,
            opacity: secondCardVisible ? 1 : 0,
            pointerEvents: secondCardVisible ? 'auto' : 'none'
          }}>
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
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-white font-bold leading-tight mb-4">
                    We're bringing adaptive intelligence to where humans work
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Third Card - Appears on more scroll */}
            <div className="absolute inset-0 overflow-hidden will-change-transform shadow-xl" style={{
            ...cardStyle,
            zIndex: 30,
            transform: `translateY(${thirdCardVisible ? scrollProgress < 0.8 ? 15 : 0 : 200}px) scale(1)`,
            opacity: thirdCardVisible ? 1 : 0,
            pointerEvents: thirdCardVisible ? 'auto' : 'none'
          }}>
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
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-white font-bold leading-tight mb-4">
                    We're creating companions, <span className="text-[#FC4D0A]">not replacements</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default HumanoidSection;
