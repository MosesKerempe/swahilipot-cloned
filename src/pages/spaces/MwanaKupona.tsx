import React from 'react';
import MwanaKuponaSpace from '@/components/sphSpaces/MwanaKuponaSpace';

export default function MwanaKuponaPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mwana Kupona Tech Lab
            </h1>
            <p className="text-xl mb-8">
              Our cutting-edge facility dedicated to technology education, innovation, and development.
            </p>
          </div>
        </div>
      </section>
      
      <MwanaKuponaSpace />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Mwana Kupona Tech Lab - SwahiliPot Hub",
      description: "Our cutting-edge facility dedicated to technology education, innovation, and development."
    }
  };
}