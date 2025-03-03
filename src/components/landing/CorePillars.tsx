export default function CorePillars() {
  const pillars = [
    {
      title: "Technology",
      description: "Fostering innovation and digital skills development through coding bootcamps, hackathons, and tech workshops.",
      icon: "💻"
    },
    {
      title: "Creatives and Arts",
      description: "Promoting cultural expression through music, dance, visual arts, and other creative endeavors.",
      icon: "🎨"
    },
    {
      title: "Heritage",
      description: "Building a supportive ecosystem for youth to collaborate, learn, and grow together.",
      icon: "🤝"
    },
  
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Swahilipot Core Pillars</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SwahiliPot Hub is built on four key pillars that guide our mission and activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-blue p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}