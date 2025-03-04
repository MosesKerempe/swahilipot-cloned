import React from 'react';
import DonateHero from '@/components/stw/DonateHero';
import DonateForm from '@/components/stw/DonateForm';
import MentorshipDonation from '@/components/stw/MentorshipDonation';
import PadDonationsCard from '@/components/stw/padDonationsCard';

export default function SupportSTWPage() {
  return (
    <>
      <DonateHero />
      <DonateForm />
      <MentorshipDonation />
      <PadDonationsCard />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Support Swahili Tech Women - SwahiliPot Hub",
      description: "Your contribution helps us empower more women in technology across East Africa. Together, we can bridge the gender gap in tech."
    }
  };
}