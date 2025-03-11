import Image from 'next/image';

const CommunitySpace = () => {
  return (
    <section className="bg-white text-black">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-10 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Swahilipot Hub Community Space</h1>
        <p className="text-lg md:text-xl">Our Main Community Space</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6 md:p-10">
        {/* First Image */}
        <div className="w-full flex justify-center my-6">
          <Image
            src="/images/community.jpeg"
            alt="Swahilipot Community Space"
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Description */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
          Where Networking and Collaboration Flourish
        </h2>
        <p className="mb-6 text-black leading-relaxed">
          Step into the Community Space, an enchanting space where collaboration, networking, and entertainment come to life.
        </p>

        {/* Benefits Section */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
          Benefits of It:
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-black leading-relaxed">
          <li>
            <strong>Main Community Hall:</strong> Our largest space for community gatherings, workshops, and events. This versatile space can be configured for various activities.
          </li>
          <li>
            <strong>Collaboration Zone:</strong> A dedicated space for teamwork and collaborative projects. Perfect for group discussions and brainstorming sessions.
          </li>
          <li>
            <strong>Quiet Study Area:</strong> A peaceful environment for focused individual work and study. Designed to maximize productivity and concentration.
          </li>
        </ul>

        {/* Closing Section */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-black">
          The Heart Place for Collaboration, Networking, and Studying
        </h2>
        <p className="mb-6 text-black leading-relaxed">
          The Community Space is more than just a collaboration zone and study area; it's also a place for networking and relaxing, enjoying some good fresh air.
          It’s where moments of wonder, joy, and inspiration are created, and it’s a space that is open to all who appreciate the magic of live performances.
          Join us in celebrating the arts in a space where creativity knows no bounds.
        </p>
      </div>
    </section>
  );
};

export default CommunitySpace;