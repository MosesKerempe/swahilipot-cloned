import React from 'react';
import Card from './Card';
import Link from 'next/link';

interface Event {
  title: string;
  date: string;
  image: string;
  description: string;
  link: string;
}

interface CardsProps {
  events: Event[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  viewAllLink?: string;
}

export default function Cards({ 
  events, 
  title = "Upcoming Events", 
  subtitle = "Join us for our exciting events and programs.",
  showViewAll = true,
  viewAllLink = "/programs/events"
}: CardsProps) {
  return (
    <section className="py-16 bg-light dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={index}
              title={event.title}
              date={event.date}
              image={event.image}
              description={event.description}
              link={event.link}
            />
          ))}
        </div>
        
        {showViewAll && (
          <div className="text-center mt-10">
            <Link href={viewAllLink} className="btn">
              View All Events
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}