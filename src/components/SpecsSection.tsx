
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-24 bg-white" id="specifications">
      <div className="container px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-dashed border-gray-800">
              <span className="text-gray-800 font-medium">02</span>
            </div>
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Specs</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content */}
        <div className="max-w-5xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display leading-tight mb-12">
            Atlas works with your team, <span className="text-[#8B5CF6]">not</span> <span className="text-[#0EA5E9]">instead</span> <span className="text-[#D97706]">of</span> <span className="text-[#F97316]">it</span>.
            <br /><br />
            By handling repetitive tasks, improving safety conditions, and learning from every interaction, Atlas helps <span className="text-[#9A3412]">humans</span> <span className="text-[#F97316]">focus</span> on what they do best: <span className="text-[#6E59A5]">create</span>, <span className="text-[#0EA5E9]">solve</span>, <span className="text-[#D97706]">and</span> <span className="text-[#F97316]">innovate</span>.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
