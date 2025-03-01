import Link from 'next/link';

export default function Upcoming() {
  // This would typically come from your data file
  const events = [
    {
      title: "Tech Hackathon 2025",
      date: "March 15-17, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "SwahiliPot Hub, Mombasa",
      description: "A 48-hour coding challenge to solve local community problems.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/programs/events"
    },
    {
      title: "Women in Tech Summit",
      date: "April 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "SwahiliPot Hub, Mombasa",
      description: "Celebrating and empowering women in technology fields.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/programs/events"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for our exciting events and programs happening soon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="text-sm text-primary font-medium mb-1">{event.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Link href={event.link} className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
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