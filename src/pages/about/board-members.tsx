import React from 'react';
import Hero from '@/components/about/board/Hero';
import BoardMembers from '@/components/about/board/BoardMembers';

export default function BoardMembersPage() {
  return (
    <>
      <Hero />
      <BoardMembers />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Board Members - SwahiliPot Hub",
      description: "Meet the dedicated individuals who provide strategic guidance and oversight to SwahiliPot Hub."
    }
  };
}