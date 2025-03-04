import Image from "next/image";

export default function CorePillars() {
  const pillars = [
    {
      title: "Technology",
      description:
        "Swahilipot Hub empowers young individuals in technology through programs like Data and Research, Digital Literacy, Industrial Attachment, Campus Ambassador, and Pitching Thursday.",
      imageSrc: "/images/pillar1.svg",
      bgColor: "bg-blue-100", // Light blue background
    },
    {
      title: "Creatives & Arts",
      description:
        "The Creative Department brings imagination to life through initiatives like Sanaa Show and Saanart Shop, nurturing talents in acting, voice arts, and diverse artistic expressions, empowering artists to make a difference in the community.",
      imageSrc: "/images/pillar2.svg",
      bgColor: "bg-orange-100", // Light orange background
    },
    {
      title: "Heritage",
      description: "Connecting the past and the future.",
      imageSrc: "/images/pillar3.svg",
      bgColor: "bg-blue-100", // Light blue background
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Swahilipot Core Pillars</h2>
          <p className="text-lg text-gray-600">Tech | Arts | Heritage</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${pillar.bgColor}`}
            >
              <h3 className="text-lg font-bold text-blue-900">{pillar.title}</h3>
              <p className="text-gray-700 mb-4">{pillar.description}</p>
              <Image
                src={pillar.imageSrc}
                alt={pillar.title}
                width={300}
                height={200}
                className="mx-auto"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700">Have a question?</p>
          <a href="#" className="text-blue-600 hover:underline">
            Contact Us &gt;
          </a>
        </div>
      </div>
    </section>
  );
}
