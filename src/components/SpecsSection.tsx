
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-24 bg-white" id="specifications">
      <div className="container px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span>
              <span>Specs</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with better formatting and background image mask */}
        <div className="max-w-5xl">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-display leading-tight mb-12 bg-clip-text text-transparent bg-no-repeat bg-cover"
            style={{ 
              backgroundImage: "url('/lovable-uploads/8132a4bb-5541-47d4-997f-924171232bdd.png')",
              backgroundPosition: "center"
            }}
          >
            <span className="block mb-2">
              Atlas works with your team, 
              <span> not </span>
              <span>instead </span>
              <span>of </span>
              <span>it</span>.
            </span>
            
            <span className="block mt-8">
              By handling repetitive tasks, improving safety conditions, 
              and learning from every interaction, Atlas helps 
              <span> humans </span>
              <span>focus </span>
              on what they do best: 
              <span> create</span>, 
              <span> solve</span>, 
              <span> and </span>
              <span> innovate</span>.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
