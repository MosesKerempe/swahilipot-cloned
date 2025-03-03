import React from 'react';
import Hero from '@/components/joinus/Hero';
import PageContent from '@/components/joinus/PageContent';
import Form from '@/components/joinus/Form';

export default function JoinUsPage() {
  return (
    <>
      <Hero />
      <PageContent />
      <Form />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Join SwahiliPot Hub - Become Part of Our Community",
      description: "Join our vibrant community of innovators, creators, and change-makers. Together, we can make a difference."
    }
  };
}