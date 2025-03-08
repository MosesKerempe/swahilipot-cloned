import React from 'react';
import Hero from '@/components/about/Team/Hero';
import Team from '@/components/about/Team/Team';

export default function ManagementTeamPage() {
  return (
    <>
      <Hero />
      <Team />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Management Team - SwahiliPot Hub",
      description: "Meet the dedicated professionals who lead SwahiliPot Hub's day-to-day operations and programs."
    }
  };
}