import React from 'react';
import Link from 'next/link';


  return (
    <section className="py-16 bg-light dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Swahili Tech Women offers a variety of programs and activities designed to support women at every stage of their tech journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
              <Link href={program.link} className="text-primary font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/stwdonate/membership" className="btn px-8 py-3">
            Join Swahili Tech Women
          </Link>
        </div>
      </div>
    </section>
  );
