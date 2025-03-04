import React from 'react';
import Link from 'next/link';

interface SpacesCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  capacity: string;
  link: string;
}

export default function SpacesCard({ title, description, image, features, capacity, link }: SpacesCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-sm text-primary font-medium mb-3">Capacity: {capacity}</div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <h4 className="font-medium mb-2">Features:</h4>
        <ul className="space-y-1 text-gray-600 dark:text-gray-300 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link href={link} className="btn inline-block">
          Learn More
        </Link>
      </div>
    </div>
  );
}