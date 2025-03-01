
import React, { useEffect, useRef, useState } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // Refined animation timing with more natural easing curve
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Start observing when 10% of element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Optimized scroll handler using requestAnimationFrame with smoother progress calculation
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 1.8; // Reduced for more sensitivity
          
          // Calculate the scroll progress with smoother curve
          let progress = 0;
          if (sectionRect.top <= 0) {
            // Apply easing to the progress value
            const rawProgress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
            progress = easeInOutCubic(rawProgress);
            setScrollProgress(progress);
          }
          
          // Use more precise thresholds for smoother transitions
          if (progress >= 0.6) {
            setActiveCardIndex(2);
          } else if (progress >= 0.25) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    // Easing function for smoother progress
    const easeInOutCubic = (x: number): number => {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculate dynamic transform values based on scroll progress for smoother transitions
  const getCardTransform = (cardIndex: number) => {
    if (cardIndex === 0) { // First card
      const translateY = 90 - (scrollProgress * 30); // More gradual movement
      const scale = 0.9 + (scrollProgress * 0.05); // Subtle scale increase
      const opacity = 1 - (scrollProgress * 1.2); // Fade out slightly faster
      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: Math.max(0, opacity),
        zIndex: 10
      };
    } else if (cardIndex === 1) { // Second card
      let translateY, scale, opacity;
      
      if (scrollProgress < 0.25) { // Before becoming active
        translateY = 65 - (scrollProgress * 40);
        scale = 0.92;
        opacity = 0.2 + (scrollProgress * 3.2); // Smoother fade in
      } else if (scrollProgress >= 0.6) { // After being active
        translateY = 45 - ((scrollProgress - 0.6) * 60);
        scale = 0.95 - ((scrollProgress - 0.6) * 0.1);
        opacity = 1 - ((scrollProgress - 0.6) * 2.5); // Smoother fade out
      } else { // While active
        translateY = 45 - ((scrollProgress - 0.25) * 10); // Small movement while active
        scale = 0.95 + ((scrollProgress - 0.25) * 0.05);
        opacity = 1;
      }
      
      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: Math.max(0, opacity),
        zIndex: 20
      };
    } else { // Third card
      let translateY, scale, opacity;
      
      if (scrollProgress < 0.4) { // Before becoming active
        translateY = 30;
        scale = 0.97;
        opacity = 0.2 + (scrollProgress * 2); // Gradual fade in
      } else { // While becoming active
        translateY = 30 - ((scrollProgress - 0.4) * 30); // Smooth movement to final position
        scale = 0.97 + ((scrollProgress - 0.4) * 0.03);
        opacity = 1;
      }
      
      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: Math.max(0, Math.min(1, opacity)),
        zIndex: 30
      };
    }
  };

  // Card visibility based on actual scroll progress instead of just active index
  const isFirstCardVisible = isIntersecting && scrollProgress < 0.5;
  const isSecondCardVisible = scrollProgress > 0.1;
  const isThirdCardVisible = scrollProgress > 0.4;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="why-humanoid">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
                <span>Humanoid</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2">
              Why Humanoid
            </h2>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                ...getCardTransform(0),
                pointerEvents: isFirstCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">The vision</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    We're giving AI a way to navigate the physical world
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Second Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                ...getCardTransform(1),
                pointerEvents: isSecondCardVisible && activeCardIndex === 1 ? 'auto' : 'none',
                animationDelay: "0.05s"
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">The vision</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    We're bringing adaptive intelligence to where humans work
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Third Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                ...getCardTransform(2),
                pointerEvents: isThirdCardVisible && activeCardIndex === 2 ? 'auto' : 'none',
                animationDelay: "0.1s"
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">The vision</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    We're creating companions, <span className="text-[#FC4D0A]">not replacements</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidSection;
