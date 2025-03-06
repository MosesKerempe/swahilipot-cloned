// import React from 'react';
// import SpacesCard from './SpacesCard';

// export default function CommunitySpace() {
//   const communitySpaces = [
//     {
//       title: "Main Community Hall",
//       description: "Our largest space for community gatherings, workshops, and events. This versatile space can be configured for various activities.",
//       image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       features: [
//         "Flexible seating arrangements",
//         "Projector and screen",
//         "Sound system",
//         "Air conditioning",
//         "Wi-Fi access"
//       ],
//       capacity: "Up to 100 people",
//       link: "/spaces/community-space"
//     },
//     {
//       title: "Collaboration Zone",
//       description: "A dedicated space for teamwork and collaborative projects. Perfect for group discussions and brainstorming sessions.",
//       image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       features: [
//         "Modular furniture",
//         "Whiteboards",
//         "Large displays for presentations",
//         "High-speed internet",
//         "Coffee and refreshment area"
//       ],
//       capacity: "Up to 30 people",
//       link: "/spaces/collaboration-zone"
//     },
//     {
//       title: "Quiet Study Area",
//       description: "A peaceful environment for focused individual work and study. Designed to maximize productivity and concentration.",
//       image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       features: [
//         "Individual workstations",
//         "Ergonomic seating",
//         "Natural lighting",
//         "Power outlets at every seat",
//         "Reference materials"
//       ],
//       capacity: "Up to 20 people",
//       link: "/spaces/quiet-study-area"
//     }
//   ];

//   return (
//     <section className="py-16 bg-light dark:bg-gray-800">
//       <div className="container-custom mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Community Spaces</h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Explore our community spaces designed to foster collaboration, learning, and creativity.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {communitySpaces.map((space, index) => (
//             <SpacesCard 
//               key={index}
//               title={space.title}
//               description={space.description}
//               image={space.image}
//               features={space.features}
//               capacity={space.capacity}
//               link={space.link}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import Image from 'next/image';

export default function AmphitheatreSpace() {
  const features = [
    "Tiered seating for optimal viewing",
    "Professional sound system",
    "Stage lighting",
    "Backstage area for performers",
    "Excellent acoustics",
    "Climate control"
  ];

  const events = [
    "Theatrical performances",
    "Musical concerts",
    "Poetry readings",
    "Film screenings",
    "Lectures and talks",
    "Award ceremonies"
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Community Space</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Our state-of-the-art community space provides the perfect venue for performances, presentations, and cultural events. With excellent acoustics and comfortable seating, this space brings artists and audiences together in an intimate setting.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              The amphitheatre can accommodate up to 150 people and is equipped with professional sound and lighting systems to enhance any performance or presentation.
            </p>
            <div className="bg-light dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Amphitheatre at SwahiliPot Hub" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="bg-light dark:bg-gray-700 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Perfect For</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-gray-700 dark:text-gray-300">{event}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Booking Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-medium mb-4">Rates</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Half Day (4 hours)</span>
                  <span className="font-semibold">KES 15,000</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Full Day (8 hours)</span>
                  <span className="font-semibold">KES 25,000</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Evening Event (6pm-10pm)</span>
                  <span className="font-semibold">KES 20,000</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Weekend Full Day</span>
                  <span className="font-semibold">KES 30,000</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                * Discounts available for non-profit organizations and educational institutions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-medium mb-4">How to Book</h4>
              <ol className="space-y-2 list-decimal pl-5">
                <li className="text-gray-700 dark:text-gray-300">
                  Check availability by contacting our events team
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Fill out the booking form with your event details
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Pay a 50% deposit to secure your booking
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Finalize technical requirements at least one week before your event
                </li>
              </ol>
              <div className="mt-6">
                <a href="mailto:events@swahilipothub.co.ke" className="btn">
                  Contact for Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}