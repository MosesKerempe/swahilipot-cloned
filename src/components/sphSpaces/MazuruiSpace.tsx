import React from 'react';

export default function MazuruiSpace() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Mazurui Space</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Named after the historic Mazrui family who were influential in Mombasa's history, the Mazurui Space is our premium meeting and conference facility. This elegant space combines modern technology with cultural elements to create an inspiring environment for discussions and presentations.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              With a capacity of up to 50 people, this versatile space can be arranged in various configurations to suit different types of meetings, workshops, and small conferences.
            </p>
            <div className="bg-light dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">High-definition projector and screen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Video conferencing equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">High-speed internet access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Comfortable executive seating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Climate control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Refreshment service available</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Mazurui Space at SwahiliPot Hub" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="bg-light dark:bg-gray-700 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-semibold mb-6">Ideal For</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Board meetings</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Training sessions</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Workshops</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Small conferences</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Presentations</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Strategy sessions</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-4">Rates</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Half Day (4 hours)</span>
                <span className="font-semibold">KES 10,000</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Full Day (8 hours)</span>
                <span className="font-semibold">KES 18,000</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Hourly Rate</span>
                <span className="font-semibold">KES 3,000</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              * Catering services available at additional cost.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-4">Booking Information</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To book the Mazurui Space, please contact our facilities team with the following information:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">Preferred date and time</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">Number of attendees</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">Room setup requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">Technical needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">Catering requirements (if any)</span>
              </li>
            </ul>
            <div className="mt-6">
              <a href="mailto:facilities@swahilipothub.co.ke" className="btn">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}