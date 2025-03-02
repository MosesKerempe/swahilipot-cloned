import { useState } from 'react';

export default function SignupCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter to receive the latest updates, stories, and events from SwahiliPot Hub Foundation.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
              <p>You'll now receive our latest updates directly to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-sm mt-4 text-white text-opacity-80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}