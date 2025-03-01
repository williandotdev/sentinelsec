
import React, { useEffect, useRef, useState } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = cardsContainer?.querySelectorAll('.card-sticky') || [];
    
    if (!section || !cardsContainer || cards.length === 0) return;
    
    const handleScroll = () => {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // If section is not visible at all, do nothing
      if (sectionTop > windowHeight || sectionTop + sectionHeight < 0) return;
      
      // Calculate progress through the section (0 to 1)
      const scrollableDistance = sectionHeight - windowHeight;
      const scrolled = Math.abs(sectionTop);
      const scrollProgress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
      
      // Divide total scroll into equal segments for each card
      const cardCount = cards.length;
      const cardSegment = 1 / cardCount;
      
      // Calculate which card should be active based on scroll progress
      let newActiveIndex = Math.floor(scrollProgress / cardSegment);
      newActiveIndex = Math.min(newActiveIndex, cardCount - 1);
      
      setActiveCardIndex(newActiveIndex);
      
      // Apply active class to current card only
      cards.forEach((card, index) => {
        if (index === newActiveIndex) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    };
    
    // Set first card active initially
    cards[0].classList.add('active');
    setActiveCardIndex(0);
    
    // Initial call to set up the first card
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      className="w-full overflow-hidden sticky-section" 
      id="why-humanoid"
      ref={sectionRef}
    >
      <div className="container px-6 lg:px-8 mx-auto sticky-container">
        <div className="w-full">
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
          
          {/* Cards container */}
          <div className="relative w-full h-[600px]" ref={cardsContainerRef}>
            {/* Card 1 */}
            <div className={`w-full h-full rounded-3xl overflow-hidden card-sticky ${activeCardIndex === 0 ? 'active' : ''}`}>
              {/* Repositioned background element with gradient overlay */}
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
            
            {/* Card 2 */}
            <div className={`w-full h-full rounded-3xl overflow-hidden card-sticky ${activeCardIndex === 1 ? 'active' : ''}`}>
              {/* Repositioned background element with gradient overlay */}
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
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-white font-bold leading-tight mb-6">We're bringing adaptive intelligence to where humans work</h3>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className={`w-full h-full rounded-3xl overflow-hidden card-sticky ${activeCardIndex === 2 ? 'active' : ''}`}>
              {/* Repositioned background element with gradient overlay */}
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
      </div>
    </section>
  );
};

export default HumanoidSection;
