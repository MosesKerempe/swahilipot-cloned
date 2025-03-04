import React from 'react';
import STWHero from '@/components/stw/STWHero';
import STWExplanation from '@/components/stw/STWExplanation';
import Activities from '@/components/stw/Activities';
import MentorshipDonation from '@/components/stw/MentorshipDonation';
import PadDonationsCard from '@/components/stw/padDonationsCard';

export default function SwahiliTechWomenPage() {
  return (
    <>
      <STWHero />
      <STWExplanation />
      <Activities />
      <MentorshipDonation />
      <PadDonationsCard />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Swahili Tech Women - SwahiliPot Hub",
      description: "Empowering women in technology through education, mentorship, and community support. Join us in bridging the gender gap in tech."
    }
  };
}