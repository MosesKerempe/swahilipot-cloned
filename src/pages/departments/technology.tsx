import React from 'react';
import PageHero from '@/components/engineering/PageHero';
import PageAbout from '@/components/technology/PageAbout';
import Stats from '@/components/technology/Stats';
import Roles from '@/components/technology/Roles';
import Team from '@/components/technology/Team';

export default function TechnologyDepartment() {
  // Department data
  const departmentDescription = "The Technology Department at SwahiliPot Hub drives digital innovation and skills development through various programs, workshops, and initiatives. Our team works to empower youth with the technical skills and knowledge needed to thrive in the digital economy and create innovative solutions to local challenges.";
  
  const departmentImage = "/images/technologysvg.png";
  
  const activities = [
    "Coding Bootcamps",
    "Tech Workshops",
    "Digital Skills Training",
    "Hackathons",
    "Tech Mentorship",
    "Innovation Challenges"
  ];
  
  const stats = [
    { label: "Youth Trained", value: "1,000+" },
    { label: "Bootcamps Conducted", value: "30+" },
    { label: "Hackathons Organized", value: "15+" },
    { label: "Tech Projects Launched", value: "100+" }
  ];
  
  const roles = [
    {
      title: "Data and Research",
      description: "Our Data and Research programs focus on data collection and analysis. Through partnerships with organizations like Decodis and UN Habitat, we provide opportunities for young people to earn a stipend and participate in this program. Over 100 youths have gained valuable skills in data collection and analysis through this initiative.",
      requirements: ["Data collection skills", "Analytical mindset", "Basic knowledge of research methodologies"]
    },
    {
      title: "Industrial Attachment",
      description: "Our Industrial Attachment program offers a well-structured curriculum for attachés from various institutions to acquire industry-specific skills. Participants gain hands-on experience in fields such as web development, networking, and essential soft skills like working with young people and effective communication. We prioritize teaching 21st-century skills to equip participants for success.",
      requirements: ["Enrollment in a relevant course", "Willingness to learn", "Basic understanding of industry tools"]
    },
    {
      title: "Campus Ambassador",
      description: "Through our Campus Ambassador program, we collaborate closely with six tertiary institutions. Our ambassadors share information about the opportunities and benefits that Swahilipot provides to young people. In return, we offer support to these ambassadors through workshops, meetups, online courses, and hackathons. This program nurtures young talents and fosters a vibrant tech community.",
      requirements: ["Strong communication skills", "Passion for technology", "Ability to engage with peers effectively"]
    }
  ];
  
    
  const teamMembers = [
    {
      name: "Person one",
      title: "Technology Director",
      image: "/images/mtu.png",
      bio: "Person one leads our technology department with a passion for digital innovation and education. She has extensive experience in technology program development and implementation.",
    
    },
    {
      name: "Person two",
      title: "Tech Programs Coordinator",
      image: "/images/mtu.png",
      bio: "Person two coordinates our various technology programs and events, ensuring they run smoothly and achieve their objectives. He is passionate about creating opportunities for youth in tech.",
      
    },
    {
      name: "Person three",
      title: "Digital Skills Trainer",
      image: "/images/mtu.png",
      bio: "Person three develops and delivers training programs on various digital skills, from basic computer literacy to advanced programming. She believes in making technology education accessible to all.",
   
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