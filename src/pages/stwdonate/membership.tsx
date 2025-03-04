import React from 'react';
import MembershipHero from '@/components/stw/MembershipHero';
import MemberShipForm from '@/components/stw/MembershipForm';
import STWExplanation from '@/components/stw/STWExplanation';

export default function MembershipPage() {
  return (
    <>
      <MembershipHero />
      <STWExplanation />
      <MemberShipForm />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Join Swahili Tech Women - SwahiliPot Hub",
      description: "Become part of a supportive community of women in technology. Together, we learn, grow, and create opportunities."
    }
  };
}