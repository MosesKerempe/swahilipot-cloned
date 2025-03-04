import React from 'react';
import PageHero from '@/components/engineering/PageHero';
import PageAbout from '@/components/engineering/PageAbout';
import Stats from '@/components/engineering/Stats';
import Roles from '@/components/engineering/Roles';
import Team from '@/components/engineering/Team';

export default function CreativesDepartment() {
  // Department data
  const departmentDescription = "The Creatives Department at SwahiliPot Hub celebrates and promotes arts and culture through various programs, exhibitions, and performances. Our team works to nurture creative talent, preserve cultural heritage, and provide platforms for artistic expression in our community.";
  
  const departmentImage = "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  
  const activities = [
    "Art Exhibitions",
    "Music Programs",
    "Dance Workshops",
    "Cultural Events",
    "Creative Skills Development",
    "Digital Arts Initiatives"
  ];
  
  const stats = [
    { label: "Artists Supported", value: "300+" },
    { label: "Exhibitions Hosted", value: "50+" },
    { label: "Workshops Conducted", value: "120+" },
    { label: "Cultural Events", value: "80+" }
  ];
  
  const roles = [
    {
      title: "Arts & Culture Manager",
      description: "Oversees all creative programs and initiatives at SwahiliPot Hub.",
      requirements: [
        "Background in arts, culture, or related field",
        "Experience in program development and management",
        "Knowledge of East African arts and cultural practices",
        "Strong leadership and communication skills"
      ]
    },
    {
      title: "Visual Arts Coordinator",
      description: "Manages visual arts programs, exhibitions, and workshops.",
      requirements: [
        "Experience in visual arts or gallery management",
        "Curation and exhibition design skills",
        "Knowledge of various visual art forms",
        "Project management abilities"
      ]
    },
    {
      title: "Performing Arts Coordinator",
      description: "Coordinates music, dance, theater, and other performing arts programs.",
      requirements: [
        "Background in performing arts",
        "Event planning and production experience",
        "Knowledge of various performance traditions",
        "Strong organizational skills"
      ]
    }
  ];
  
  const teamMembers = [
    {
      name: "Sarah Ochieng",
      title: "Arts & Culture Manager",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Sarah brings her extensive background in arts to develop and manage our creative programs and cultural initiatives. She is dedicated to preserving and promoting local cultural heritage.",
      social: {
        twitter: "https://twitter.com/sarahochieng",
        email: "sarah.ochieng@swahilipothub.co.ke"
      }
    },
    {
      name: "Daniel Mutua",
      title: "Visual Arts Coordinator",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Daniel manages our visual arts programs, exhibitions, and workshops. He is passionate about providing platforms for artists to showcase their work and develop their skills.",
      social: {
        instagram: "https://instagram.com/danielmutua",
        linkedin: "https://linkedin.com/in/danielmutua",
        email: "daniel.mutua@swahilipothub.co.ke"
      }
    },
    {
      name: "Fatima Ali",
      title: "Performing Arts Coordinator",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Fatima coordinates our music, dance, theater, and other performing arts programs. She believes in the power of performance to preserve culture and create social change.",
      social: {
        twitter: "https://twitter.com/fatimaali",
        instagram: "https://instagram.com/fatimaali",
        email: "fatima.ali@swahilipothub.co.ke"
      }
    }
  ];

  return (
    <>
      <PageHero 
        title="Creatives Department" 
        subtitle="Celebrating and promoting arts and culture through various programs, exhibitions, and performances."
      />
      
      <PageAbout 
        description={departmentDescription}
        image={departmentImage}
        activities={activities}
      />
      
      <Stats stats={stats} />
      
      <Roles roles={roles} />
      
      <Team members={teamMembers} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Creatives Department - SwahiliPot Hub",
      description: "The Creatives Department at SwahiliPot Hub celebrates and promotes arts and culture through various programs, exhibitions, and performances."
    }
  };
}