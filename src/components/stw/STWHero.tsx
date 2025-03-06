import React from 'react';
import Link from 'next/link';

export default function STWHero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Swahili Tech Women
            </h1>
            <p className="text-xl mb-8">
              Empowering women in technology through education, mentorship, and community support. Join us in bridging the gender gap in tech.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/programs/swahili-tech-women" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Learn More
              </Link>
              <Link href="/stwdonate/membership" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-primary transition-colors">
                Join STW
              </Link>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/women-micky.jpeg" 
              alt="Swahili Tech Women" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}