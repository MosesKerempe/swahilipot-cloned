// src/components/sphSpaces/AmphitheatreSpace.tsx
import React from 'react';
import Image from 'next/image';

export default function AmphitheatreSpace() {
  const features = [
    "Tiered seating for optimal viewing",
    "Professional sound system",
    "Stage lighting",
    "Backstage area for performers",
    "Excellent acoustics",
    "Climate control"
  ];

  const events = [
    "Theatrical performances",
    "Musical concerts",
    "Poetry readings",
    "Film screenings",
    "Lectures and talks",
    "Award ceremonies"
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side: Description */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Amphitheatre Space</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Our state-of-the-art amphitheatre provides the perfect venue for performances, presentations, and cultural events. With excellent acoustics and comfortable seating, this space brings artists and audiences together in an intimate setting.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              The amphitheatre can accommodate up to 150 people and is equipped with professional sound and lighting systems to enhance any performance or presentation.
            </p>
            
            {/* Features Section */}
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Side: Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Amphitheatre at SwahiliPot Hub" 
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* "Perfect For" Section */}
        <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-md mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Perfect For</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <p className="text-gray-700 dark:text-gray-300">{event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Information Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Booking Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rates Section */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Rates</h4>
              <ul className="space-y-2">
                <li className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Half Day (4 hours)</span>
                  <span className="font-semibold">KES 15,000</span>
                </li>
                <li className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Full Day (8 hours)</span>
                  <span className="font-semibold">KES 25,000</span>
                </li>
                <li className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Evening Event (6pm-10pm)</span>
                  <span className="font-semibold">KES 20,000</span>
                </li>
                <li className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Weekend Full Day</span>
                  <span className="font-semibold">KES 30,000</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                * Discounts available for non-profit organizations and educational institutions.
              </p>
            </div>
            
            {/* How to Book Section */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">How to Book</h4>
              <ol className="space-y-2 list-decimal pl-5 text-gray-700 dark:text-gray-300">
                <li>Check availability by contacting our events team</li>
                <li>Fill out the booking form with your event details</li>
                <li>Pay a 50% deposit to secure your booking</li>
                <li>Finalize technical requirements at least one week before your event</li>
              </ol>
              <div className="mt-6">
                <a href="mailto:events@swahilipothub.co.ke" className="btn bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-200 ease-in-out">
                  Contact for Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
