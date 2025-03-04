import React from 'react';
import Link from 'next/link';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  link: string;
}

export default function EventCard({ title, date, time, location, description, image, link }: EventCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="text-sm text-primary font-medium mb-1">{date}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-4">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <Link href={link} className="text-primary font-medium hover:underline">
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}