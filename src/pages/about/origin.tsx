import React from 'react';
import Hero from '@/components/about/origin/Hero';
import Origin from '@/components/about/origin/Origin';

export default function OriginPage() {
  return (
    <>
      <Hero />
      <Origin />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Our Origin Story - SwahiliPot Hub",
      description: "Discover how SwahiliPot Hub began and the journey that has shaped our mission and vision."
    }
  };
}