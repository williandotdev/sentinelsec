
import React from "react";

const HumanoidSection = () => {
  return (
    <section className="w-full overflow-hidden py-16 md:py-24" id="why-humanoid">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-pulse-500 text-pulse-500">
              <span className="text-sm font-medium">02</span>
            </div>
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-pulse-500 text-pulse-500">
              <span className="text-sm font-medium">Humanoid</span>
            </div>
          </div>
          
          <h2 className="section-title text-4xl sm:text-5xl font-display font-bold mb-8">
            Why Humanoid
          </h2>
        </div>
        
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#121654] to-[#4799D9] z-0"></div>
          
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
    </section>
  );
};

export default HumanoidSection;
