import React from 'react';
import Link from 'next/link';

export default function Activities() {
  const programs = [
    {
      title: "Tech Skills Training",
      description: "Comprehensive training programs in various tech fields including web development, mobile app development, data science, UI/UX design, and more.",
      icon: "💻",
      link: "/programs/swahili-tech-women/training"
    },
    {
      title: "Mentorship Program",
      description: "Connect with experienced professionals in the tech industry who provide guidance, support, and career advice.",
      icon: "🤝",
      link: "/programs/swahili-tech-women/mentorship"
    },
    {
      title: "Networking Events",
      description: "Regular meetups, conferences, and networking sessions to build connections within the tech community.",
      icon: "🔄",
      link: "/programs/swahili-tech-women/events"
    },
    {
      title: "Career Development",
      description: "Resume workshops, interview preparation, job placement assistance, and career counseling services.",
      icon: "📈",
      link: "/programs/swahili-tech-women/career"
    },
    {
      title: "Tech Talks & Workshops",
      description: "Regular sessions featuring industry experts discussing emerging technologies and trends.",
      icon: "🎤",
      link: "/programs/swahili-tech-women/talks"
    },
    {
      title: "Scholarship Program",
      description: "Financial support for women pursuing education and certification in technology fields.",
      icon: "🎓",
      link: "/programs/swahili-tech-women/scholarships"
    }
  ];

  return (
    <section className="py-16 bg-light dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Swahili Tech Women offers a variety of programs and activities designed to support women at every stage of their tech journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
              <Link href={program.link} className="text-primary font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/stwdonate/membership" className="btn px-8 py-3">
            Join Swahili Tech Women
          </Link>
        </div>
      </div>
    </section>
  );
}