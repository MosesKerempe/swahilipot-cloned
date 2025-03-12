import Link from 'next/link';

export default function WorkWithUs() {
  const opportunities = [
    {
      title: "Volunteer",
      description: "Share your skills and time to support our programs and initiatives.",
      icon: "🤝",
      link: "/about/work-with-us"
    },
    {
      title: "Partner",
      description: "Collaborate with us on projects that create impact in the community.",
      icon: "🤲",
      link: "/about/work-with-us"
    },
    {
      title: "Sponsor",
      description: "Support our programs financially to help us reach more youth.",
      icon: "💰",
      link: "/stwdonate/support-stw"
    },
    {
      title: "Join Our Team",
      description: "Explore career opportunities and be part of our mission.",
      icon: "👥",
      link: "/about/work-with-us"
    }
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-900">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Work With Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            There are many ways to get involved with SwahiliPot Hub and contribute to our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{opportunity.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{opportunity.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{opportunity.description}</p>
              <Link href={opportunity.link} className="text-primary font-medium hover:underline dark:text-blue-400">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
