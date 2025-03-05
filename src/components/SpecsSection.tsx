
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-10 bg-white" id="specifications"> {/* Reduced from py-16 */}
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
        
        {/* Main content with text mask image */}
        <div className="max-w-5xl pl-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display leading-tight mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Atlas works with your team, not instead of it. By handling repetitive tasks, improving safety conditions, and learning from every interaction, Atlas helps humans focus on what they do best: create, solve, and innovate.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
