import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    membershipType: 'regular',
    message: '',
    agreeTerms: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setIsSubmitted(true);
  };

  const interests = [
    "Technology",
    "Arts & Culture",
    "Entrepreneurship",
    "Community Development",
    "Education",
    "Other"
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Join Our Community</h2>
            
            {isSubmitted ? (
              <div className="text-center">
                <div className="text-5xl text-primary mb-4">✓</div>
                <h3 className="text-2xl font-semibold mb-2">Thank You for Joining!</h3>
                <p className="text-gray-700 mb-6">
                  Your application has been submitted successfully. We'll review your information and get back to you soon.
                </p>
                <p className="text-gray-700">
                  In the meantime, feel free to explore our website to learn more about our programs and initiatives.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">Area of Interest *</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select an area of interest</option>
                    {interests.map((interest, index) => (
                      <option key={index} value={interest.toLowerCase()}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Membership Type *</label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="membershipType"
                        value="regular"
                        checked={formData.membershipType === 'regular'}
                        onChange={handleChange}
                        className="mr-2"
                        required
                      />
                      <span>Regular (Free)</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="membershipType"
                        value="premium"
                        checked={formData.membershipType === 'premium'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>Premium (KES 1,000/month)</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Tell us about yourself</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Share your background, skills, and what you hope to achieve by joining SwahiliPot Hub."
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <span className="text-gray-700">
                      I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                    </span>
                  </label>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn px-8 py-3">
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}