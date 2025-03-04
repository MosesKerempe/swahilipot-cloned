import React from 'react';

export default function MekatililiSpace() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Mekatilili Creative Studio</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Named after Mekatilili wa Menza, a legendary female leader from the Kenyan coast, our creative studio is a space dedicated to artistic expression and innovation. This vibrant space is designed to inspire creativity and collaboration among artists, designers, and creators.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              The studio provides the tools, equipment, and environment needed for various creative pursuits, from visual arts to digital design and multimedia production.
            </p>
            <div className="bg-light dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Studio Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Professional lighting equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Digital design workstations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Audio recording equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Photography and videography gear</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Art supplies and materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Exhibition space</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Mekatilili Creative Studio at SwahiliPot Hub" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="bg-light dark:bg-gray-700 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-semibold mb-6">Creative Activities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Digital Art</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Photography</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Videography</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Graphic Design</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Painting</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Podcasting</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Animation</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300">Music Production</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-4">Membership Options</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Day Pass</span>
                  <span className="font-semibold">KES 500</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Access to the studio for a full day (8 hours)
                </p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Weekly Membership</span>
                  <span className="font-semibold">KES 2,000</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Unlimited access for one week
                </p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Monthly Membership</span>
                  <span className="font-semibold">KES 5,000</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Unlimited access for one month, plus storage space
                </p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Quarterly Membership</span>
                  <span className="font-semibold">KES 12,000</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Unlimited access for three months, storage space, and priority booking
                </p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-4">Studio Programs</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-1">Creative Workshops</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Regular workshops on various creative skills led by experienced professionals.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Artist Residency Program</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Opportunities for artists to work in the studio for extended periods on specific projects.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Exhibition Opportunities</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Regular exhibitions to showcase work created in the studio.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Mentorship Program</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Connect with experienced creatives for guidance and support.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <a href="/programs/creative-arts" className="btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}