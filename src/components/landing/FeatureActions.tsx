import Link from 'next/link';

export default function FeatureActions() {
  const features = [
    {
      title: "Join Our Community",
      description: "Become a member of SwahiliPot Hub and access our resources, events, and network.",
      icon: "👥",
      link: "/joinus",
      linkText: "Sign Up"
    },
    {
      title: "Explore Our Programs",
      description: "Discover the various initiatives and programs we offer for youth development.",
      icon: "🚀",
      link: "/programs/events",
      linkText: "View Programs"
    },
    {
      title: "Support Our Mission",
      description: "Contribute to our cause through donations, partnerships, or volunteering.",
      icon: "❤️",
      link: "/stwdonate/support-stw",
      linkText: "Donate Now"
    },
    {
      title: "Visit Our Space",
      description: "Come experience our collaborative spaces designed for innovation and creativity.",
      icon: "🏢",
      link: "/spaces/community-space",
      linkText: "See Spaces"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            There are many ways to engage with SwahiliPot Hub and be part of our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-light p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Link href={feature.link} className="btn">
                {feature.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}