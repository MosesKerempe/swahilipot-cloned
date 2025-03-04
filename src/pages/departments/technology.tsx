import React from 'react';
import PageHero from '@/components/engineering/PageHero';
import PageAbout from '@/components/engineering/PageAbout';
import Stats from '@/components/engineering/Stats';
import Roles from '@/components/engineering/Roles';
import Team from '@/components/engineering/Team';

export default function TechnologyDepartment() {
  // Department data
  const departmentDescription = "The Technology Department at SwahiliPot Hub drives digital innovation and skills development through various programs, workshops, and initiatives. Our team works to empower youth with the technical skills and knowledge needed to thrive in the digital economy and create innovative solutions to local challenges.";
  
  const departmentImage = "https://images.unsplash.com/photo-1581092921461-7d65ca45393a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  
  const activities = [
    "Coding Bootcamps",
    "Tech Workshops",
    "Digital Skills Training",
    "Hackathons",
    "Tech Mentorship",
    "Innovation Challenges"
  ];
  
  const stats = [
    { label: "Youth Trained", value: "2,000+" },
    { label: "Bootcamps Conducted", value: "30+" },
    { label: "Hackathons Organized", value: "15+" },
    { label: "Tech Projects Launched", value: "100+" }
  ];
  
  const roles = [
    {
      title: "Technology Director",
      description: "Oversees all technology programs and initiatives at SwahiliPot Hub.",
      requirements: [
        "Experience in technology education or management",
        "Strong technical background",
        "Program development and implementation skills",
        "Strategic thinking and leadership abilities"
      ]
    },
    {
      title: "Tech Programs Coordinator",
      description: "Manages and coordinates various technology programs and events.",
      requirements: [
        "Experience in program coordination",
        "Knowledge of technology education",
        "Event planning and management skills",
        "Strong organizational abilities"
      ]
    },
    {
      title: "Digital Skills Trainer",
      description: "Develops and delivers training programs on various digital skills.",
      requirements: [
        "Technical expertise in relevant areas",
        "Teaching or training experience",
        "Curriculum development skills",
        "Strong communication abilities"
      ]
    }
  ];
  
  const teamMembers = [
    {
      name: "Sarah Ochieng",
      title: "Technology Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Sarah leads our technology department with a passion for digital innovation and education. She has extensive experience in technology program development and implementation.",
      social: {
        twitter: "https://twitter.com/sarahochieng",
        linkedin: "https://linkedin.com/in/sarahochieng",
        email: "sarah.ochieng@swahilipothub.co.ke"
      }
    },
    {
      name: "John Maina",
      title: "Tech Programs Coordinator",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "John coordinates our various technology programs and events, ensuring they run smoothly and achieve their objectives. He is passionate about creating opportunities for youth in tech.",
      social: {
        twitter: "https://twitter.com/johnmaina",
        linkedin: "https://linkedin.com/in/johnmaina",
        github: "https://github.com/johnmaina",
        email: "john.maina@swahilipothub.co.ke"
      }
    },
    {
      name: "Grace Wanjiku",
      title: "Digital Skills Trainer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Grace develops and delivers training programs on various digital skills, from basic computer literacy to advanced programming. She believes in making technology education accessible to all.",
      social: {
        linkedin: "https://linkedin.com/in/gracewanjiku",
        github: "https://github.com/gracewanjiku",
        email: "grace.wanjiku@swahilipothub.co.ke"
      }
    }
  ];

  return (
    <>
      <PageHero 
        title="Technology Department" 
        subtitle="Driving digital innovation and skills development through various programs, workshops, and initiatives."
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
      title: "Technology Department - SwahiliPot Hub",
      description: "The Technology Department at SwahiliPot Hub drives digital innovation and skills development through various programs, workshops, and initiatives."
    }
  };
}