import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  date: string;
  image: string;
  description: string;
  link: string;
}

export default function Card({ title, date, image, description, link }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-primary font-medium mb-2">{date}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link href={link} className="text-primary font-medium hover:underline">
          Learn more →
        </Link>
      </div>
    </div>
  );
}