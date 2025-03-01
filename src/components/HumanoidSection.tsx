
import React from "react";

const HumanoidSection = () => {
  return (
    <section className="w-full overflow-hidden py-16 md:py-24" id="why-humanoid">
      <div className="container px-6 lg:px-8 mx-auto">
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
        
        {/* Grid for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0" style={{
              backgroundImage: "url('/background-section1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
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
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0" style={{
              backgroundImage: "url('/background-section1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
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
          
          {/* Card 3 */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0" style={{
              backgroundImage: "url('/background-section1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
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
          
          {/* Card 4 */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0" style={{
              backgroundImage: "url('/background-section1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
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
        </div>
      </div>
    </section>
  );
};

export default HumanoidSection;
