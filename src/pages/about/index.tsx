import React from 'react';
import Hero from '@/components/about/Hero';
import Mission from '@/components/about/Mission';
import Vision from '@/components/about/Vission';
import Gallery from '@/components/about/Gallery';

export default function About() {
  return (
    <>
      <Hero />
      <Mission />
      <Vision />
      <Gallery />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "About Us - SwahiliPot Hub",
      description: "Learn about SwahiliPot Hub's mission, vision, and the impact we're making in East Africa through technology, arts, and culture."
    }
  };
}