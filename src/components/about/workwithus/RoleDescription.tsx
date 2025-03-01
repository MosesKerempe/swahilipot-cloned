import Link from 'next/link';

interface RoleDescriptionProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  applicationLink: string;
}

export default function RoleDescription({
  title,
  department,
  location,
  type,
  description,
  responsibilities,
  qualifications,
  applicationLink
}: RoleDescriptionProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="bg-light px-3 py-1 rounded-full">{department}</span>
          <span className="bg-light px-3 py-1 rounded-full">{location}</span>
          <span className="bg-light px-3 py-1 rounded-full">{type}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-700">{description}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
        <ul className="list-disc pl-5 space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Qualifications</h3>
        <ul className="list-disc pl-5 space-y-2">
          {qualifications.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <Link href={applicationLink} className="btn">
          Apply Now
        </Link>
      </div>
    </div>
  );
}