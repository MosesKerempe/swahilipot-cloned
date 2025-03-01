export default function Origin() {
  const timeline = [
    {
      year: "2015",
      title: "The Beginning",
      description: "SwahiliPot Hub was founded with a vision to create a space for youth to explore technology and arts in Mombasa."
    },
    {
      year: "2016",
      title: "First Programs",
      description: "Launched our first coding bootcamps and creative arts workshops, reaching over 100 youth in the community."
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Expanded our facilities to include dedicated spaces for technology, arts, and community gatherings."
    },
    {
      year: "2018",
      title: "Key Partnerships",
      description: "Formed strategic partnerships with tech companies and educational institutions to enhance our programs."
    },
    {
      year: "2019",
      title: "Community Growth",
      description: "Reached a milestone of 1,000+ youth impacted through our various initiatives and programs."
    },
    {
      year: "2020",
      title: "Digital Adaptation",
      description: "Pivoted to virtual programs during the pandemic, ensuring continued support for our community."
    },
    {
      year: "2021",
      title: "New Initiatives",
      description: "Launched Swahili Tech Women and other specialized programs to address specific community needs."
    },
    {
      year: "2022-Present",
      title: "Continued Impact",
      description: "Expanding our reach across East Africa and deepening our impact in existing communities."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">The SwahiliPot Hub Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            SwahiliPot Hub was born from a vision to create a space where young people in Mombasa could explore technology, arts, and culture in a supportive environment. What started as a small community gathering has grown into a vibrant hub for innovation and creativity in East Africa.
          </p>
          <p className="text-lg text-gray-700">
            Our founders recognized the untapped potential of youth in the region and the lack of resources available to them. They set out to build a space that would bridge this gap, providing access to technology, mentorship, and opportunities for collaboration.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-5/12"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10">
                  {event.year.split('-')[0].slice(-2)}
                </div>
                
                <div className="w-5/12 bg-light p-6 rounded-lg shadow-md">
                  <div className="text-sm text-primary font-bold mb-1">{event.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}