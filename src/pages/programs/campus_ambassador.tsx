import React from 'react';

export default function CampusAmbassadorPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Campus Ambassador Program
            </h1>
            <p className="text-xl mb-8">
              Connecting university students with SwahiliPot Hub to promote innovation and technology on campus.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Campus Ambassador Program</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                The Campus Ambassador Program creates a network of student representatives who promote SwahiliPot Hub's mission and activities on university campuses. Ambassadors organize events, share resources, and build communities of innovation and creativity at their institutions, while developing leadership and professional skills.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our ambassadors serve as the bridge between SwahiliPot Hub and university students, helping to extend our reach and impact to more young people across East Africa.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Campus Ambassador Program" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Ambassador Responsibilities</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Promote SwahiliPot Hub</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Raise awareness about SwahiliPot Hub's mission, programs, and opportunities among university students through social media, presentations, and word-of-mouth.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build Campus Communities</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Create and nurture communities of students interested in technology, innovation, arts, and entrepreneurship on campus.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Organize Events</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Plan and execute campus events such as workshops, tech talks, hackathons, and creative showcases in collaboration with SwahiliPot Hub.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Represent SwahiliPot Hub</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Act as a representative of SwahiliPot Hub on campus, embodying our values of innovation, creativity, collaboration, and community impact.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Provide Feedback</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Share insights about student needs, interests, and challenges to help SwahiliPot Hub improve and tailor its programs for university students.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Benefits for Campus Ambassadors" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Benefits for Ambassadors</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Leadership and professional development opportunities</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Networking with industry professionals and like-minded peers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Priority access to SwahiliPot Hub programs and events</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Mentorship from SwahiliPot Hub team members</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Recognition and certification for your contributions</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Exclusive ambassador swag and resources</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Potential internship and job opportunities through our network</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-light dark:bg-gray-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-700 dark:text-gray-300">Campus Ambassadors</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-gray-700 dark:text-gray-300">Universities Represented</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">120+</div>
                <p className="text-gray-700 dark:text-gray-300">Events Organized</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-gray-700 dark:text-gray-300">Students Reached</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Become a Campus Ambassador</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
              If you're a university student passionate about technology, innovation, arts, or entrepreneurship, we invite you to apply to become a SwahiliPot Hub Campus Ambassador.
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Eligibility Criteria</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Currently enrolled in a university or college</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Strong communication and interpersonal skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Passion for technology, innovation, arts, or entrepreneurship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Leadership experience or potential</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Commitment to dedicate at least 5 hours per week to ambassador activities</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Application Process</h3>
              <ol className="space-y-2 mb-6 list-decimal pl-5">
                <li className="text-gray-700 dark:text-gray-300">
                  Complete the online application form
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Participate in a virtual interview
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Attend the ambassador orientation and training
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Begin your journey as a SwahiliPot Hub Campus Ambassador
                </li>
              </ol>
              
              <div className="text-center">
                <a href="/joinus" className="btn px-8 py-3">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Campus Ambassador Program - SwahiliPot Hub",
      description: "The Campus Ambassador Program creates a network of student representatives who promote SwahiliPot Hub's mission and activities on university campuses."
    }
  };
}