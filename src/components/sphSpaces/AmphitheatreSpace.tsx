import Image from 'next/image';

const SwahilipotAmphitheater = () => {
  return (
    <section className="bg-white text-black">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-10 px-6 text-center">
        <h1 className="text-3xl font-bold">Swahilipot Hub Amphitheater</h1>
        <p className="text-lg">Where Art Meets the Heart</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        {/* First Image */}
        <div className="w-full flex justify-center my-6">
          <Image src="/images/Amp.jpg" alt="Swahilipot Amphitheater" width={800} height={450} className="rounded-lg shadow-lg" />
        </div>

        {/* Description */}
        <h2 className="text-2xl font-semibold mb-4">Where Art and Entertainment Flourish</h2>
        <p className="mb-6">
          Step into the Community Hub Amphitheater, an enchanting space where art, culture, and entertainment come to life. 
          This amphitheater is a testament to the creative spirit of our community and the celebration of the performing arts.
        </p>

        {/* Second Image */}
        <div className="w-full flex justify-center my-6">
          <Image src="/images/Amp1.jpg" alt="Swahilipot Amphitheater" width={800} height={450} className="rounded-lg shadow-lg" />
        </div>

        {/* Benefits to the Community */}
        <h2 className="text-2xl font-semibold mb-4">Benefits to the Community:</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>1: Cultural Enrichment:</strong> The amphitheater is an enchanting space where art, culture, and 
            entertainment come to life. It is a testament to the creative spirit of our community and the celebration of the performing arts.
          </li>
          <li>
            <strong>2: Entertainment For All Ages:</strong> From family-friendly events to cutting-edge performances, the 
            amphitheater offers a diverse range of entertainment, ensuring that there's something for everyone in our community to enjoy.
          </li>
          <li>
            <strong>3: Community Unity:</strong> It’s a space where the community can come together to celebrate the arts, 
            fostering a sense of togetherness and shared experiences.
          </li>
          <li>
            <strong>4: Inspiration Aspiration:</strong> Young talents can use this space to showcase their potential, 
            dream big, and be inspired by the creativity that surrounds them.
          </li>
        </ul>

        {/* Closing Section */}
        <h2 className="text-2xl font-semibold mt-6">The Heart of Art and Entertainment</h2>
        <p className="mb-6">
          The Community Hub Amphitheater is more than just a performance venue; it's a reflection of our shared love for art and entertainment. 
          It’s where moments of wonder, joy, and inspiration are created, and it’s a space that is open to all who appreciate the magic of live 
          performances. Join us in celebrating the arts in a space where creativity knows no bounds.
        </p>
      </div>
    </section>
  );
};

export default SwahilipotAmphitheater;
