import React from 'react';
import Button from '../../ui/Button';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
        <p className="text-lg opacity-90 mt-4 max-w-2xl mx-auto">Contact us today to discuss how our solutions can help your organization thrive in the digital age.</p>
        <div className="mt-8">
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;