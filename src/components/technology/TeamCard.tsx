import React from "react";

interface TeamCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
 
}

export default function TeamCard({ name, title, image, bio, }: TeamCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-blue-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="flex justify-center pt-6">
        <div className="w-60 h-60 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-blue-300 ">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center filter brightness-60"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">{name}</h3>
        <p className="text-primary font-medium text-lg mb-3 text-center">{title}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm text-center">{bio}</p>

        {/* Social Links
        {social && (
          <div className="flex justify-center space-x-4 mt-4">
            {social.twitter && (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996A4.107 4.107 0 0012 4c-2.28 0-4.107 1.826-4.107 4.107 0 .321.036.633.105.933-3.412-.171-6.436-1.8-8.463-4.279-.354.608-.556 1.316-.556 2.07 0 1.428.728 2.689 1.835 3.427a4.074 4.074 0 01-1.857-.516v.053c0 1.995 1.42 3.659 3.301 4.035a4.096 4.096 0 01-1.853.07c.522 1.63 2.037 2.82 3.83 2.85a8.234 8.234 0 01-5.096 1.754c-.331 0-.659-.02-.984-.058A11.614 11.614 0 008.29 20.251z"/>
                </svg>
              </a>
            )}

            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}

            {social.github && (
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
}
