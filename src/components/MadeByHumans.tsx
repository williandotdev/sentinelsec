
import React from "react";

const MadeByHumans = () => {
  return (
    <section className="w-full py-12 bg-white" id="made-by-humans">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
            <span>Our Mission</span>
          </div>
        </div>
        
        <div className="w-full rounded-3xl overflow-hidden relative mt-8">
          <div 
            className="bg-no-repeat bg-cover bg-center p-12 md:p-16 lg:p-20 min-h-[300px] flex flex-col justify-between" 
            style={{ backgroundImage: "url('/background-section3.png')" }}
          >
            <div className="flex items-center text-white">
              <img 
                src="/logo.svg" 
                alt="Pulse Robot Logo" 
                className="h-6 w-auto mr-3 invert" 
              />
              <span className="text-white text-xl font-medium">Pulse Robot</span>
            </div>
            
            <div className="overflow-hidden" style={{ marginBottom: "-20px" }}>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white italic mt-auto">
                Made by humans
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
