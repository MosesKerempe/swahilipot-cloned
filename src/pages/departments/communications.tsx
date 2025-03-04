import React from 'react';
import PageHero from '@/components/engineering/PageHero';
import PageAbout from '@/components/engineering/PageAbout';
import Stats from '@/components/engineering/Stats';
import Roles from '@/components/engineering/Roles';
import Team from '@/components/engineering/Team';

export default function CommunicationsDepartment() {
  // Department data
  const departmentDescription = "The Communications Department at SwahiliPot Hub manages our messaging, media relations, and digital presence to share our story and impact with the world. Our team works to amplify the voices and achievements of our community, connect with stakeholders, and raise awareness about our programs and initiatives.";
  
  const departmentImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  
  const activities = [
    "Media Relations",
    "Social Media Management",
    "Content Creation",
    "Community Outreach",
    "SwahiliPot FM",
    "Brand Management"
  ];
  
  const stats = [
    { label: "Social Media Followers", value: "10,000+" },
    { label: "Media Appearances", value: "50+" },
    { label: "Content Pieces Created", value: "500+" },
    { label: "Community Reach", value: "100,000+" }
  ];
  
  const roles = [
    {
      title: "Communications Manager",
      description: "Oversees all communications activities and strategies for SwahiliPot Hub.",
      requirements: [
        "Experience in communications or public relations",
        "Strong writing and editing skills",
        "Knowledge of media relations",
        "Strategic thinking and planning abilities"
      ]
    },
    {
      title: "Social Media Coordinator",
      description: "Manages SwahiliPot Hub's presence across various social media platforms.",
      requirements: [
        "Experience with social media management",
        "Content creation skills",
        "Understanding of social media analytics",
        "Knowledge of digital marketing trends"
      ]
    },
    {
      title: "Content Creator",
      description: "Develops engaging content for SwahiliPot Hub's various communication channels.",
      requirements: [
        "Strong writing and storytelling abilities",
        "Photography and videography skills",
        "Graphic design experience",
        "Attention to detail and creativity"
      ]
    }
  ];
  
  const teamMembers = [
    {
      name: "Grace Wanjiku",
      title: "Communications Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Grace leads our communications strategy, sharing SwahiliPot Hub's story and impact with the world. She has a background in digital marketing and content creation.",
      social: {
        twitter: "https://twitter.com/gracewanjiku",
        linkedin: "https://linkedin.com/in/gracewanjiku",
        email: "grace.wanjiku@swahilipothub.co.ke"
      }
    },
    {
      name: "Peter Njoroge",
      title: "Media Coordinator",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Peter manages media relations and coordinates SwahiliPot FM, our community radio station. He has experience in journalism and broadcasting.",
      social: {
        twitter: "https://twitter.com/peternjoroge",
        linkedin: "https://linkedin.com/in/peternjoroge",
        email: "peter.njoroge@swahilipothub.co.ke"
      }
    },
    {
      name: "Amina Hassan",
      title: "Content Creator",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Amina creates engaging content for our website, social media, and publications. She is passionate about storytelling and visual communication.",
      social: {
        instagram: "https://instagram.com/aminahassan",
        linkedin: "https://linkedin.com/in/aminahassan",
        email: "amina.hassan@swahilipothub.co.ke"
      }
    }
  ];

  return (
    <>
      <PageHero 
        title="Communications Department" 
        subtitle="Sharing SwahiliPot Hub's story and impact with the world through strategic communications and media relations."
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
      title: "Communications Department - SwahiliPot Hub",
      description: "The Communications Department at SwahiliPot Hub manages our messaging, media relations, and digital presence to share our story and impact."
    }
  };
}