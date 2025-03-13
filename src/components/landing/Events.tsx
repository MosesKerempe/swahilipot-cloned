import Link from 'next/link';

export default function Events() {
  // This would typically come from your data file
  const events = [
    {
      title: "Tech Hackathon 2025",
      date: "Coming Soon",
      description: "A 48-hour coding challenge to solve local community problems.",
      image: "/images/hackathon.png",
      link: "/programs/events"
    },
    {
      title: "Women in Tech Summit",
      date: "Coming Soon",
      description: "Celebrating and empowering women in technology fields.",
      image: "/images/womentech.png",
      link: "/programs/events"
    },
    {
      title: "Youth Innovation Showcase",
      date: "Coming Soon",
      description: "Working towards showcasing solutions to save the world from climate change.",
      image: "/images/youthinnovation.png",
      link: "/programs/events"
    }
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us for our exciting events and programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2 text-gray-900 dark:text-gray-100">{event.date}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                <Link href={event.link} className="text-primary font-medium hover:underline dark:text-blue-400">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/programs/events" className="btn text-orange hover:bg-blue-700 dark:hover:bg-blue-800 dark:text-blue-100">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
