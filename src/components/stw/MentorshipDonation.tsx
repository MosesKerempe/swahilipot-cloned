import React from 'react';
import Link from 'next/link';

export default function MentorshipDonation() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Support Our Mentorship Program</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Our mentorship program pairs experienced tech professionals with women who are starting or advancing their careers in technology. Your donation helps us expand this program and provide more women with the guidance they need to succeed.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              With your support, we can provide structured mentorship, career guidance, and networking opportunities to more women across East Africa.
            </p>
            <Link href="/stwdonate/support-stw" className="btn px-6 py-3">
              Donate Now
            </Link>
          </div>
          
          <div className="bg-light dark:bg-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Your Impact</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-full text-primary mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">3 Months of Mentorship</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    KES 15,000 provides one woman with three months of structured mentorship from an industry professional.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-full text-primary mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Mentorship Group</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    KES 50,000 funds a mentorship group for 10 women, including regular group sessions and learning materials.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-full text-primary mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Career Development</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    KES 25,000 provides career development workshops, resume reviews, and interview preparation for 5 women.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-full text-primary mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Networking Events</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    KES 100,000 sponsors a major networking event connecting mentees with industry professionals and potential employers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}