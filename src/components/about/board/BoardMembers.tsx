import TeamCard from './TeamCard';

export default function BoardMembers() {
  // This would typically come from your data file or CMS
  const boardMembers = [
    {
      name: "Dr. Jane Smith",
      title: "Chairperson",
      bio: "Dr. Smith is a renowned technology expert with over 20 years of experience in the industry. She brings strategic vision and leadership to the board.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        email: "jane.smith@example.com"
      }
    },
    {
      name: "John Doe",
      title: "Vice Chairperson",
      bio: "John has extensive experience in community development and youth empowerment programs across East Africa.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        email: "john.doe@example.com"
      }
    },
    {
      name: "Mary Johnson",
      title: "Secretary",
      bio: "Mary is a legal expert specializing in technology policy and governance, ensuring SwahiliPot Hub maintains the highest standards.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "https://linkedin.com/in/maryjohnson",
        email: "mary.johnson@example.com"
      }
    },
    {
      name: "Robert Kimani",
      title: "Treasurer",
      bio: "Robert brings financial expertise and business acumen to the board, helping guide SwahiliPot Hub's sustainable growth.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "https://linkedin.com/in/robertkimani",
        email: "robert.kimani@example.com"
      }
    },
    {
      name: "Sarah Ochieng",
      title: "Board Member",
      bio: "Sarah is a respected arts and culture advocate who helps strengthen SwahiliPot Hub's creative programs.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "https://twitter.com/sarahochieng",
        email: "sarah.ochieng@example.com"
      }
    },
    {
      name: "David Mwangi",
      title: "Board Member",
      bio: "David is a tech entrepreneur who provides valuable insights on innovation and startup development.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "https://twitter.com/davidmwangi",
        linkedin: "https://linkedin.com/in/davidmwangi",
        email: "david.mwangi@example.com"
      }
    }
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Board of Directors</h2>
          <p className="text-lg text-gray-700">
            Our board members bring diverse expertise and experience to guide SwahiliPot Hub's strategic direction. They are committed to our mission of empowering youth through technology, arts, and culture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <TeamCard 
              key={index}
              name={member.name}
              title={member.title}
              bio={member.bio}
              image={member.image}
              social={member.social}
            />
          ))}
        </div>
      </div>
    </section>
  );
}