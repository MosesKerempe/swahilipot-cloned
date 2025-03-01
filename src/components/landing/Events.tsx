import Link from 'next/link';

export default function Events() {
  // This would typically come from your data file
  const events = [
    {
      title: "Tech Hackathon 2025",
      date: "March 15-17, 2025",
      description: "A 48-hour coding challenge to solve local community problems.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/programs/events"
    },
    {
      title: "Women in Tech Summit",
      date: "April 5, 2025",
      description: "Celebrating and empowering women in technology fields.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/programs/events"
    },
    {
      title: "Youth Innovation Showcase",
      date: "May 20, 2025",
      description: "Showcasing innovative projects by young entrepreneurs.",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/programs/events"
    }
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for our exciting events and programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{event.date}</div>
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link href={event.link} className="text-primary font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/programs/events" className="btn">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}