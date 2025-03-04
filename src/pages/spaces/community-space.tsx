import React from 'react';
import CommunitySpace from '@/components/sphSpaces/CommunitySpace';

export default function CommunitySpacePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Community Spaces
            </h1>
            <p className="text-xl mb-8">
              Explore our community spaces designed to foster collaboration, learning, and creativity.
            </p>
          </div>
        </div>
      </section>
      
      <CommunitySpace />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Community Spaces - SwahiliPot Hub",
      description: "Explore our community spaces designed to foster collaboration, learning, and creativity."
    }
  };
}