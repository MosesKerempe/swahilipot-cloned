import React from 'react';
import Hero from '@/components/about/Hero';
import Mission from '@/components/about/Mission';
import Vission from '@/components/about/Vission';
import Gallery from '@/components/about/Gallery';

export default function About() {
  return (
    <>
      <Hero />
      <Mission />
      <Vission />
      <Gallery />
    </>
  );
}

export async function getStaticProps() {
  try {
    // If you're importing any JSON data, wrap it in try-catch
    // const data = await import('../../data/some-file.json');
    
    return {
      props: {
        title: "About Us - SwahiliPot Hub",
        description: "Learn about SwahiliPot Hub's mission, vision, and the impact we're making in East Africa through technology, arts, and culture."
      }
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    // Return fallback props if JSON parsing fails
    return {
      props: {
        title: "About Us",
        description: "SwahiliPot Hub",
        error: true
      }
    };
  }
}