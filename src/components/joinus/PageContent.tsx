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
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Join SwahiliPot Hub?</h2>
          <p className="text-lg text-gray-700 text-center">
            SwahiliPot Hub offers a unique environment where technology, arts, and culture intersect. As a member, you'll have access to resources, opportunities, and a community that supports your growth and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-light p-8 rounded-lg">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Membership Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Regular Membership</h3>
              <div className="text-3xl font-bold text-primary mb-4">Free</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Access to community events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Basic use of facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Participation in select programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Community newsletter</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary text-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Premium Membership</h3>
              <div className="text-3xl font-bold mb-4">KES 1,000/month</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>All Regular benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>Priority access to facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>Exclusive workshops and events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>One-on-one mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>Discounts on paid programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}