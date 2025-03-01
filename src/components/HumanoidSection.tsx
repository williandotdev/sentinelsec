
import React, { useEffect, useRef } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = cardsContainer?.querySelectorAll('.card-sticky') || [];
    
    if (!section || !cardsContainer || cards.length === 0) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-sticky');
          } else {
            section.classList.remove('is-sticky');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    
    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      
      // Calculate how far through the section the user has scrolled
      const scrollProgress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        // Determine which card should be visible based on scroll progress
        const cardIndex = Math.min(
          Math.floor(scrollProgress * cards.length),
          cards.length - 1
        );
        
        cards.forEach((card, index) => {
          if (index <= cardIndex) {
            (card as HTMLElement).style.opacity = '1';
            (card as HTMLElement).style.transform = `translateY(0)`;
          } else {
            (card as HTMLElement).style.opacity = '0';
            (card as HTMLElement).style.transform = `translateY(50px)`;
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      className="w-full overflow-hidden py-16 md:py-24 sticky-section" 
      id="why-humanoid"
      ref={sectionRef}
      style={{ height: '200vh' }} // Make the section taller to accommodate scrolling
    >
      <div className="container px-6 lg:px-8 mx-auto sticky top-20" style={{ height: '80vh' }}>
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            {/* Updated styling to match Hero section's Purpose button */}
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
        <div className="flex flex-col gap-6" ref={cardsContainerRef}>
          {/* Card 1 */}
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden card-sticky transition-all duration-500">
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
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden card-sticky transition-all duration-500">
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
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden card-sticky transition-all duration-500">
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
    </section>
  );
};

export default HumanoidSection;
