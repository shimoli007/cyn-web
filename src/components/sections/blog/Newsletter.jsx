import React, { useState } from 'react';
import Button from '../../ui/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) return;
    
    // Here you would typically send this to your API
    // This is just a mock implementation
    setIsSubscribed(true);
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-blue-950 text-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and news in enterprise technology. We'll send you monthly updates - no spam, we promise!
          </p>
        </div>
        
        {isSubscribed ? (
          <div className="text-center bg-white/10 p-4 rounded-md max-w-lg mx-auto">
            <p className="text-lg">Thank you for subscribing!</p>
            <p className="opacity-80 mt-2">You'll receive our next newsletter in your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4 text-center">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Cynea.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;