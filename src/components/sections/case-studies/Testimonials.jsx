import React from 'react';
import Testimonial from '../../ui/Testimonial';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Cynea's ERP solution has completely transformed our operations. We now have full visibility across all our locations and can make data-driven decisions in real-time.",
      author: "Aisha Mohammed",
      position: "Information Officer",
      company: "TechNova Solutions"
    },
    {
      quote: "The team at Cynea understood our unique challenges and delivered a solution that not only met our immediate needs but also positioned us for future growth.",
      author: "David Ochieng'",
      position: "CEO",
      company: "AgriTech Hub"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear directly from the organizations we've helped transform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;