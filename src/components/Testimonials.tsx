
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Atlas transformed our production line, handling repetitive tasks while our team focuses on innovation. 30% increase in output within three months.",
    author: "Sarah Chen",
    role: "VP of Operations, Axion Manufacturing",
    gradient: "from-blue-700 via-indigo-800 to-purple-900"
  },
  {
    content: "Implementing Atlas in our fulfillment centers reduced workplace injuries by 40% while improving order accuracy. The learning capabilities are remarkable.",
    author: "Michael Rodriguez",
    role: "Director of Logistics, GlobalShip",
    gradient: "from-indigo-900 via-purple-800 to-orange-500"
  },
  {
    content: "Atlas adapted to our lab protocols faster than any system we've used. It's like having another researcher who never gets tired and maintains perfect precision.",
    author: "Dr. Amara Patel",
    role: "Lead Scientist, BioAdvance Research",
    gradient: "from-purple-800 via-pink-700 to-red-500"
  },
  {
    content: "As a mid-size business, we never thought advanced robotics would be accessible to us. Atlas changed that equation entirely with its versatility and ease of deployment.",
    author: "Jason Lee",
    role: "CEO, Innovative Solutions Inc.",
    gradient: "from-orange-600 via-red-500 to-purple-600"
  }
];

const TestimonialCard = ({ content, author, role }: TestimonialProps) => {
  return (
    <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{ backgroundImage: "url('/background-section1.png')" }}>
      {/* White square box in the top right corner - now solid white */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-white"></div>
      
      <p className="text-xl mb-8 font-medium leading-relaxed">{`"${content}"`}</p>
      <div>
        <h4 className="font-semibold text-xl">{author}</h4>
        <p className="text-white/80">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-20 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full border border-dashed border-black flex items-center justify-center">
            <span className="text-lg font-bold">03</span>
          </div>
          <div className="px-4 py-2 border border-dashed border-black rounded-full">
            <span className="font-medium">Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-bold mb-12 text-left">What others say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              gradient={testimonial.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
