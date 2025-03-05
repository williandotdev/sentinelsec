
import React from "react";
import { Asterisk } from "lucide-react";

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
          <div className="bg-gradient-to-r from-dark-900 via-purple-900 to-pulse-500 p-12 md:p-16 lg:p-20 min-h-[300px] flex flex-col justify-between">
            <div className="flex items-center text-white mb-20">
              <Asterisk className="w-6 h-6 mr-3" />
              <span className="text-xl font-medium">Pulse Robot</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white italic">
              Made by humans
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
