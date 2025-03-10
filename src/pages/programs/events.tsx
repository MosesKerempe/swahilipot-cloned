import React from 'react';
import events from '@/data/events.json';
import EventCard from '@/components/sphevents/EventCard';

export default function CaseManagementPage() {
  return (
    <>
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container-custom mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[calc(4rem*0.5)] md:text-[calc(6rem*0.5)] font-bold mb-6">
            Events & Programs
          </h1>
          <p className="text-[calc(1.25rem*0.8)] mb-8">
            Discover upcoming events. workshops, and programs at Swahilipot Hub.
          </p>
        </div>
      </div>
    </section>
  
      
      <section className="py-16 bg-orange-50 dark:bg-gray-800">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Join us for these exciting events and programs. Registration is required for most events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 mb-16">
            {events.filter(event => event.featured).map((event, index) => (
              <EventCard 
                key={index}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                image={event.image}
                link={`/programs/events/${event.id}`}
              />
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">All Events</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Browse all our upcoming events and programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-blue-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary font-medium">{event.date}</span>
                    <span className="text-xs bg-light dark:bg-gray-600 px-2 py-1 rounded-full">{event.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                  <a href={`/programs/events/${event.id}`} className="text-primary font-medium hover:underline">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-50 dark:bg-gray-900">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Host Your Event at SwahiliPot Hub</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Looking for a venue for your next event? SwahiliPot Hub offers various spaces that can be customized to meet your needs.
            </p>
            <a href="/spaces/SpacesLayout" className="btn px-8 py-3">
              Explore Our Spaces
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Events & Programs - SwahiliPot Hub",
      description: "Discover upcoming events, workshops, and programs at SwahiliPot Hub."
    }
  };
}