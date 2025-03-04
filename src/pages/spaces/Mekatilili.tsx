import React from 'react';
import MekatililiSpace from '@/components/sphSpaces/MekatililiSpace';

export default function MekatililiPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mekatilili Creative Studio
            </h1>
            <p className="text-xl mb-8">
              A vibrant space dedicated to artistic expression and innovation, designed to inspire creativity and collaboration.
            </p>
          </div>
        </div>
      </section>
      
      <MekatililiSpace />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Mekatilili Creative Studio - SwahiliPot Hub",
      description: "A vibrant space dedicated to artistic expression and innovation, designed to inspire creativity and collaboration."
    }
  };
}