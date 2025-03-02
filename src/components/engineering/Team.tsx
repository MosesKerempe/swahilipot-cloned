import React from 'react';
import TeamCard from './TeamCard';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface TeamProps {
  members: TeamMember[];
}

export default function Team({ members }: TeamProps) {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Engineering Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our talented team of engineers brings diverse expertise and experience to SwahiliPot Hub.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <TeamCard 
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
              bio={member.bio}
              social={member.social}
            />
          ))}
        </div>
      </div>
    </section>
  );
}