import React, { useState } from 'react';

export default function DonateForm() {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
    anonymous: false
  });
  
  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };
  
  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setDonorInfo({
        ...donorInfo,
        [name]: target.checked
      });
    } else {
      setDonorInfo({
        ...donorInfo,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just redirect to a success page
    window.location.href = '/stwdonate/success';
  };

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Select Donation Amount</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {['1000', '2500', '5000', '10000'].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`py-3 rounded-md font-medium ${
                        donationAmount === amount
                          ? 'bg-primary text-white'
                          : 'bg-light dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500'
                      }`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      KES {amount}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="customAmount"
                    name="donationAmount"
                    checked={donationAmount === 'custom'}
                    onChange={() => setDonationAmount('custom')}
                    className="mr-2"
                  />
                  <label htmlFor="customAmount" className="mr-4">Custom Amount:</label>
                  <div className="relative flex-grow">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">KES</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full pl-12 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={donorInfo.name}
                      onChange={handleInfoChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={donorInfo.email}
                      onChange={handleInfoChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="country" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={donorInfo.country}
                    onChange={handleInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select a country</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={donorInfo.message}
                    onChange={handleInfoChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    placeholder="Share why you're supporting Swahili Tech Women"
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="anonymous"
                      checked={donorInfo.anonymous}
                      onChange={handleInfoChange}
                      className="mr-2"
                    />
                    <span className="text-gray-700 dark:text-gray-300">Make my donation anonymous</span>
                  </label>
                </div>
              </div>
              
    
              
              <div className="text-center">
        <a href="https://flutterwave.com/pay/fsxxrsiu1hvk" target="_blank" rel="noopener noreferrer">
      <button type="button" className="btn px-8 py-3">
      Complete Donation
      </button>
  </a>
</div>

            </form>
          </div>
          
      
        </div>
      </div>
    </section>
  );
}