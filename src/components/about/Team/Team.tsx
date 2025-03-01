import TeamCard from './TeamCard';

export default function Team() {
  // This would typically come from your data file or CMS
  const teamMembers = [
    {
      name: "John Doe",
      title: "Executive Director",
      department: "Leadership",
      bio: "John leads SwahiliPot Hub with a passion for technology and community development. He has over 10 years of experience in the tech industry.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        email: "john.doe@swahilipothub.co.ke"
      }
    },
    {
      name: "Jane Smith",
      title: "Programs Director",
      department: "Programs",
      bio: "Jane oversees all programs and initiatives at SwahiliPot Hub, ensuring they align with our mission and create meaningful impact.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        email: "jane.smith@swahilipothub.co.ke"
      }
    },
    {
      name: "David Mwangi",
      title: "Technology Lead",
      department: "Technology",
      bio: "David leads our technology department, developing innovative solutions and mentoring youth in software development.",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "https://linkedin.com/in/davidmwangi",
        email: "david.mwangi@swahilipothub.co.ke"
      }
    },
    {
      name: "Sarah Ochieng",
      title: "Arts & Culture Manager",
      department: "Arts & Culture",
      bio: "Sarah brings her extensive background in arts to develop and manage our creative programs and cultural initiatives.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "https://twitter.com/sarahochieng",
        email: "sarah.ochieng@swahilipothub.co.ke"
      }
    },
    {
      name: "Michael Kamau",
      title: "Community Engagement Manager",
      department: "Community",
      bio: "Michael works closely with our community partners and stakeholders to build strong relationships and collaborative initiatives.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "https://linkedin.com/in/michaelkamau",
        email: "michael.kamau@swahilipothub.co.ke"
      }
    },
    {
      name: "Grace Wanjiku",
      title: "Communications Manager",
      department: "Communications",
      bio: "Grace leads our communications strategy, sharing SwahiliPot Hub's story and impact with the world.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "https://twitter.com/gracewanjiku",
        linkedin: "https://linkedin.com/in/gracewanjiku",
        email: "grace.wanjiku@swahilipothub.co.ke"
      }
    }
  ];

  // Group team members by department
  const departments = teamMembers.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }
    acc[member.department].push(member);
    return acc;
  }, {} as Record<string, typeof teamMembers>);

  return (
    <section className="py-16 bg-light">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Management Team</h2>
          <p className="text-lg text-gray-700">
            Our dedicated team brings diverse expertise and a shared passion for empowering youth through technology, arts, and culture. Together, we work to create meaningful impact in our community.
          </p>
        </div>
        
        {Object.entries(departments).map(([department, members]) => (
          <div key={department} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-primary">{department}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <TeamCard 
                  key={index}
                  name={member.name}
                  title={member.title}
                  department={member.department}
                  bio={member.bio}
                  image={member.image}
                  social={member.social}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}