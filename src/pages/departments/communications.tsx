import React from 'react';
import PageHero from '@/components/engineering/PageHero';
import PageAbout from '@/components/communication/PageAbout';
import Stats from '@/components/communication/Stats';
import Roles from '@/components/communication/Roles';
import Team from '@/components/communication/Team';

export default function CommunicationsDepartment() {
  // Department data
  const departmentDescription = "The Communications Department at SwahiliPot Hub manages our messaging, media relations, and digital presence to share our story and impact with the world. Our team works to amplify the voices and achievements of our community, connect with stakeholders, and raise awareness about our programs and initiatives.";
  
  const departmentImage = "/images/communicationsvg.png";
  
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
      description: "Welcome to the Community Department at Swahilipot Hub! We are thrilled to have you join our vibrant community. Here, we believe in minding other people's business in the best way possible - by enabling community members to develop themselves and create an environment where talents can thrive and expertise can be shared.",
      requirements: [
        "Experience in communications or public relations",
        "Strong writing and editing skills",
        "Knowledge of media relations",
        "Strategic thinking and planning abilities"
      ]
    },
    {
      title: "Social Media Coordinator",
      description: "Remember, Swahilipot Hub is not just a physical building; it is the people who make up our community. Each and every member contributes to the vibrant tapestry of ideas, skills, and experiences that make our hub unique. Together, we can explore endless possibilities, support one another's growth, and make a positive impact on our society.",
      requirements: [
        "Experience with social media management",
        "Content creation skills",
        "Understanding of social media analytics",
        "Knowledge of digital marketing trends"
      ]
    },
    {
      title: "Content Creator",
      description: "At Swahilipot Hub, we prioritize the personal and professional development of our community members. We provide a platform for individuals to express their thoughts, ideas, and opinions. Through various programs, workshops, and resources, we aim to support the growth and development of our members.",
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
      name: "Person one",
      title: "Communications Manager",
      image: "/images/mtu.png",
      bio: "Person one leads our communications strategy, sharing SwahiliPot Hub's story and impact with the world. She has a background in digital marketing and content creation.",
   
    },
    {
      name: "Person two",
      title: "Media Coordinator",
      image: "/images/mtu.png",
      bio: "Person two manages media relations and coordinates SwahiliPot FM, our community radio station. He has experience in journalism and broadcasting.",
      
    },

    {    
      name: "Person three",
      title: "Content Creator",
      image: "/images/mtu.png",
      bio: "Person three creates engaging content for our website, social media, and publications. She is passionate about storytelling and visual communication.",
      
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
