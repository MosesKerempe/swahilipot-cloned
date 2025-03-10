import React from 'react';
import PageHero from '@/components/engineering/PageHero';
import PageAbout from '@/components/engineering/PageAbout';
import Stats from '@/components/engineering/Stats';
import Roles from '@/components/engineering/Roles';
import Team from '@/components/engineering/Team';

export default function EngineeringDepartment() {
  // Department data
  const departmentDescription = "We are the Engineering Team under the Technology Department at Swahilipot Hub Foundation, dedicated to developing and maintaining the organization's platforms as well as manage and configure the network infrastructure.";
  
  const departmentImage = "/images/engineeringsvg.png";
  
  const activities = [
    "Software Development",
    "Hardware Prototyping",
    "Tech Financing",
    "Cybersecurity Engineering",
    "Technical Support"
  ];
  
  const stats = [
    { label: "Traffic in terms of reach", value: "5000+" },
    { label: "Platforms in development", value: "10+" },
    { label: "Platforms that are live", value: "4" },
    { label: "Active Engineers", value: "15" }
  ];
  
  const roles = [
    {
      title: "Role of the team",
      description: "The Engineering team is incharge of the following roles:",
      requirements: [
        "The team is crucial to the organisation, leading software, web and digital, product development and innovation.",
        "We design and create technologies that meet the organisation's needs.",
        "Continuously optimizing solutions, they enhance product performance, ensuring competitiveness."
      ]
    },
    {
      title: "Team Goals",
      description: "The following are some of the goals of the team.",
      requirements: [
        "Developing sustainable solutions",
        "Innovation and sustainability",
        "Ethical and Inclusive Designs",
        "Network and System Configuration",
        "Resource Efficiency",
        "Documentation and Knowledge Sharing"
      ]
    },
    {
      title: "Impact of the team in the organization",
      description: "The team has the following impacts to the Swahilipot Hub Organization.",
      requirements: [
        "The team intergrates and manages platforms for various activities within the organization.",
        "Our efforts have streamlined processes and enhanced efficiency across departments",
        "The team has fostered strong collaboration with other departments such as creatives and communications, synergizing efforts to achieve common goals and objectives.",
        "Together, our contributions have significantly impacted the hub's operations and success"
      ]
    }
  ];
  
  const teamMembers = [
    {
      name: "Chris Achinga",
      title: "Engineering Lead - Dude",
      image: "/images/achinga.jpeg",
      bio: "Maker of Softwares, Breaker of Systems, and the Father of Dragons",
      social: {
        linkedin: "https://linkedin.com/in/achingachris",
        github: "https://github.com/achingachris",
        twitter: "https://twitter.com/achinga_chris"
      }
    },
    {
      name: "Jesse Amianda",
      title: "Software Developer",
      image: "/images/amianda.jpeg",
      bio: "Focused on frontend frameworks and UI/UX designs.",
      social: {
        twitter: "https://twitter.com/jessyamianda",
        github: "https://github.com/jessyamianda",
        linkedin: "https://linkedin.com/in/jessyamianda"
      }
    },
    {
      name: "Chris Mwalimo",
      title: "Software Developer",
      image: "/images/chris.jpeg",
      bio: "Specializes in AI technologies and machine learning models.",
      social: {
        linkedin: "https://linkedin.com/in/chrismwalimo",
        github: "https://github.com/chrismwalimo",
        twitter: "https://twitter.com/chris_mwalimo"
      }
    },
    {
      name: "Micky Maria",
      title: "Cybersecurity Engineer",
      image: "/images/micky.jpeg",
      bio: "Dedicated to enhancing system security and data protection.",
      social: {
        linkedin: "https://linkedin.com/in/mickymaria",
        github: "https://github.com/mickymaria",
        twitter: "https://twitter.com/mickymaria"
      }
    },
    {
      name: "Aaron Wanje",
      title: "Technical Support",
      image: "/images/aron.jpeg",
      bio: "Ensures smooth operations and rapid troubleshooting incharge of Digital Literacy classes.",
      social: {
        linkedin: "https://linkedin.com/in/michaelodhiambo",
        github: "https://github.com/michaelodhiambo",
        twitter: "https://twitter.com/michaelodhiambo"
      }
    },
    {
      name: "Joy Ngugi",
      title: "Software Developer",
      image: "/images/joy.jpeg",
      bio: "Focused on frontend frameworks and UI/UX designs.",
      social: {
        linkedin: "https://linkedin.com/in/joyngugi",
        github: "https://github.com/joyngugi",
        twitter: "https://twitter.com/joyngugi"
      }
    }
  ];
  

  return (
    <>
      <PageHero 
        title="Engineering Department" 
        subtitle="Building innovative technical solutions to address local challenges and support our community."
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
      title: "Engineering Department - SwahiliPot Hub",
      description: "The Engineering Department at SwahiliPot Hub develops technical solutions and infrastructure to support our initiatives and the wider community."
    }
  };
}