import Link from 'next/link';

export default function SwahilipotPillar() {
  const pillars = [
    {
      title: "Technology",
      description: "We provide access to technology resources, training, and mentorship to help youth develop digital skills and create innovative solutions.",
      image: "/images/mwanakupona.jpg",
      link: "/departments/technology"
    },
    {
      title: "Arts & Culture",
      description: "We celebrate and promote local arts and culture through various programs, exhibitions, and performances that showcase creative talent.",
      image: "/images/cultureimage.png",
      link: "/departments/creatives"
    },
    {
      title: "Community Development",
      description: "We foster a supportive community where youth can collaborate, learn from each other, and work together to address local challenges.",
      image: "/images/communitydev.png",
      link: "/departments/community"
    }
  ];

  return (
    <section className="py-16 bg-orange-50 dark:bg-gray-900">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Our Focus Areas</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SwahiliPot Hub's work centers around three key pillars that guide our programs and initiatives.
          </p>
        </div>
        
        <div className="space-y-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'order-1 md:order-2' : ''}>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{pillar.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{pillar.description}</p>
                <Link href={pillar.link} className="text-blue-500 dark:text-blue-400 font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
              
              <div className={index % 2 === 1 ? 'order-2 md:order-1' : ''}>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
