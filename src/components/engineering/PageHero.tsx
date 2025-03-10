import React from 'react';


interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container-custom mx-auto flex justify-center items-center h-full">
        <div className="text-center max-w-3xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-6"> {/* Reduced font size by 20% */}
            {title}
          </h1>
          <p className="text-base mb-8"> {/* Reduced font size by 20% */}
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
