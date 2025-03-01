import { useState } from 'react';
import Link from 'next/link';

export default function InnerNav() {
  const [activeTab, setActiveTab] = useState('careers');
  
  const tabs = [
    { id: 'careers', label: 'Careers' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'partner', label: 'Partner With Us' },
    { id: 'internships', label: 'Internships' }
  ];

  return (
    <div className="bg-white shadow-md mb-8">
      <div className="container-custom mx-auto">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}