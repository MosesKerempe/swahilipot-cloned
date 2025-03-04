import React from 'react';
import Link from 'next/link';

export default function PadDonationsCard() {
  return (
    <section className="py-16 bg-light dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Support Our Pad Drive</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Many young women in our community miss school or work due to lack of access to menstrual products. Our pad drive initiative aims to address this challenge by providing sanitary pads to women and girls in need.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Your donation helps ensure that women can participate fully in educational and professional opportunities without interruption.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">KES 500</span>
                    <span className="text-gray-700 dark:text-gray-300">Provides pads for 1 girl for 3 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">KES 2,000</span>
                    <span className="text-gray-700 dark:text-gray-300">Provides pads for 4 girls for 3 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">KES 5,000</span>
                    <span className="text-gray-700 dark:text-gray-300">Provides pads for 10 girls for 3 months</span>
                  </div>
                </div>
                <Link href="/stwdonate/support-stw" className="btn">
                  Donate to Pad Drive
                </Link>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Pad Drive Initiative" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}