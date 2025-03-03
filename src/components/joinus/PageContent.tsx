export default function PageContent() {
  const benefits = [
    {
      title: "Access to Resources",
      description: "Use our facilities, technology, and tools to bring your ideas to life.",
      icon: "💻"
    },
    {
      title: "Skill Development",
      description: "Participate in workshops, training sessions, and bootcamps to enhance your skills.",
      icon: "🚀"
    },
    {
      title: "Networking",
      description: "Connect with like-minded individuals, mentors, and potential collaborators.",
      icon: "🤝"
    },
    {
      title: "Mentorship",
      description: "Receive guidance from experienced professionals in your field of interest.",
      icon: "👨‍🏫"
    },
    {
      title: "Opportunities",
      description: "Access to job openings, internships, and project collaborations.",
      icon: "🔍"
    },
    {
      title: "Community",
      description: "Be part of a supportive community that celebrates creativity and innovation.",
      icon: "👥"
    }
  ];

  return (
    <section className="py-16 bg-orange-100"> {/* Changed background color to duller orange */}
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto mb-12">
          {/* Reduced font sizes by 20% */}
          <h2 className="text-2xl font-bold mb-6 text-center">Why Join SwahiliPot Hub?</h2> {/* Adjusted font size */}
          <p className="text-base text-gray-700 text-center"> {/* Adjusted font size */}
            SwahiliPot Hub offers a unique environment where technology, arts, and culture intersect. As a member, you'll have access to resources, opportunities, and a community that supports your growth and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-light p-8 rounded-lg">
              <div className="text-3xl mb-4">{benefit.icon}</div> {/* Adjusted icon size */}
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3> {/* Reduced font size */}
              <p className="text-gray-700 text-sm">{benefit.description}</p> {/* Reduced font size */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
