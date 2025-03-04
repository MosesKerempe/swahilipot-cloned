import React from 'react';
import MazuruiSpace from '@/components/sphSpaces/MazuruiSpace';

export default function MazuruiPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mazurui Space
            </h1>
            <p className="text-xl mb-8">
              Our premium meeting and conference facility, combining modern technology with cultural elements.
            </p>
          </div>
        </div>
      </section>
      
      <MazuruiSpace />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Mazurui Space - SwahiliPot Hub",
      description: "Our premium meeting and conference facility, combining modern technology with cultural elements."
    }
  };
}