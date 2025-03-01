
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Atlas has completely transformed how I manage my day. The natural interaction and adaptive learning make it feel like having a helpful assistant rather than using a machine.",
    author: "Alexandra Chen",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "As someone with limited mobility, Atlas has given me unprecedented independence. Its ability to learn my specific needs has been truly life-changing.",
    author: "Marcus Johnson",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "The integration of Atlas into our research lab has accelerated our work significantly. Its precision and adaptability are unmatched by any other robotics system we've used.",
    author: "Dr. Sophia Williams",
    role: "Research Director",
    image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialCard = ({ content, author, role, image }: TestimonialProps) => {
  return (
    <div className="glass-card p-8 h-full flex flex-col">
      <div className="mb-6">
        {/* Quote icon */}
        <svg 
          className="w-10 h-10 text-pulse-200" 
          fill="currentColor" 
          viewBox="0 0 32 32"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
        </svg>
      </div>
      
      <p className="text-gray-700 mb-6 flex-grow">{content}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <img 
            src={image} 
            alt={author} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-20 bg-gray-50 relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0">
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-4">
            <span>Testimonials</span>
          </div>
          <h2 className="section-title mb-4">What Our Early Users Say</h2>
          <p className="section-subtitle mx-auto">
            Discover how Atlas is transforming lives and workplaces through intelligent assistance.
          </p>
        </div>
        
        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
        
        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    content={testimonial.content}
                    author={testimonial.author}
                    role={testimonial.role}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors duration-300",
                  activeIndex === index ? "bg-pulse-500" : "bg-gray-300"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-pulse-500 transition-colors"
              onClick={goToPrev}
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-pulse-500 transition-colors"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
