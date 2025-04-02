import React, { useState } from 'react';
import Button from '../../ui/Button';

const FAQ = () => {
  const faqs = [
    {
      question: "How can I request a demo of Cynea's solutions?",
      answer: "You can request a demo by filling out the contact form on this page or by emailing sales@cynea.com. One of our representatives will get in touch with you to schedule a personalized demo."
    },
    {
      question: "What industries do Cynea's solutions serve?",
      answer: "Cynea serves a wide range of industries including manufacturing, financial services, healthcare, retail, energy & utilities, and telecommunications. Our solutions are customizable to meet the specific needs of different sectors."
    },
    {
      question: "Does Cynea offer implementation services?",
      answer: "Yes, we offer comprehensive implementation services for all our solutions. Our team of experts works closely with your organization to ensure smooth deployment and adoption of our software."
    },
    {
      question: "How does Cynea support customers after implementation?",
      answer: "We provide ongoing support through our dedicated support team, regular training sessions, and continuous updates to our software. We also offer different support packages based on your organization's needs."
    },
    {
      question: "Can Cynea's solutions be integrated with our existing systems?",
      answer: "Yes, our solutions are designed to integrate seamlessly with your existing systems and software. We have built-in connectors for major enterprise systems and can develop custom integrations as needed."
    },
    {
      question: "How secure are Cynea's solutions?",
      answer: "Security is a top priority at Cynea. Our solutions adhere to industry-standard security protocols and comply with relevant regulations. We implement robust data protection measures and regular security audits."
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Find answers to common questions about Cynea and our solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button href="/contact" variant="primary">
            Contact Our Support Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;