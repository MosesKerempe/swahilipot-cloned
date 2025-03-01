import Link from 'next/link';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProgramCard({ title, description, image, link }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-primary font-medium hover:underline">
          Learn more →
        </Link>
      </div>
    </div>
  );
}