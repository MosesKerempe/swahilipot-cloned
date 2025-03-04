import React from 'react';

export default function MwanaKuponaSpace() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Mwana Kupona Tech Lab</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Named after Mwana Kupona binti Msham, a 19th-century Swahili poet, our tech lab is a cutting-edge facility dedicated to technology education, innovation, and development. This space is equipped with the latest hardware and software to support learning, experimentation, and project development.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              The lab provides a collaborative environment for tech enthusiasts, students, and professionals to work on projects, learn new skills, and explore emerging technologies.
            </p>
            <div className="bg-light dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Lab Resources</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">High-performance workstations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Software development tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">3D printers and scanners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">VR/AR equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">IoT development kits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">High-speed internet</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Mwana Kupona Tech Lab at SwahiliPot Hub" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="bg-light dark:bg-gray-700 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-semibold mb-6">Tech Focus Areas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl text-primary mb-3">💻</div>
              <h4 className="font-semibold mb-2">Software Development</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Web, mobile, and desktop application development
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl text-primary mb-3">🤖</div>
              <h4 className="font-semibold mb-2">Artificial Intelligence</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Machine learning, data science, and AI applications
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl text-primary mb-3">🔌</div>
              <h4 className="font-semibold mb-2">IoT & Hardware</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Internet of Things, embedded systems, and hardware prototyping
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl text-primary mb-3">🥽</div>
              <h4 className="font-semibold mb-2">AR/VR Development</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Augmented and virtual reality applications
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl text-primary mb-3">🔒</div>
              <h4 className="font-semibold mb-2">Cybersecurity</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Network security, ethical hacking, and digital privacy
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl text-primary mb-3">🧩</div>
              <h4 className="font-semibold mb-2">Blockchain</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Distributed ledger technology and smart contracts
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-4">Access Options</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Day Pass</span>
                  <span className="font-semibold">KES 500</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Access to the lab for a full day (8 hours)
                </p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Weekly Access</span>
                  <span className="font-semibold">KES 2,500</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Unlimited access for one week
                </p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Monthly Access</span>
                  <span className="font-semibold">KES 7,500</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Unlimited access for one month, plus cloud storage
                </p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Student Discount</span>
                  <span className="font-semibold">30% off</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Available for all students with valid ID
                </p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-4">Tech Programs</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-1">Coding Bootcamps</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Intensive training programs in various programming languages and frameworks.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Tech Hackathons</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Regular hackathons focused on solving local challenges through technology.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Tech Talks & Workshops</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Weekly sessions featuring industry experts and new technologies.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Project Incubation</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Support for promising tech projects from idea to prototype.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <a href="/programs/tech-education" className="btn">
                Join a Program
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}