import Image from 'next/image';

const JitumeLab = () => {
  return (
    <section className="bg-white text-black">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-10 px-6 text-center">
        <h1 className="text-3xl font-bold">Jitume Lab</h1>
        <p className="text-lg">Learning Centre</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Image Section */}
        <div className="w-full flex justify-center my-6">
          <Image
            src="/images/mwanakupona.jpg" 
            alt="Jitume Lab"
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <h2 className="text-2xl font-semibold mb-4">Jitume</h2>
        <p className="mb-6">
          Jitume is a bundled program that takes care of the main challenges facing citizens regarding digital opportunities. 
          The challenges range from access to digital devices, internet connectivity, training, and knowledge to opportunities 
          that can result in decent and dignified income. It encourages the youth to take it upon themselves to access digital 
          devices and opportunities to learn, become certified in skills for the 4th Industrial Revolution (4IR), and to access 
          digital jobs. After Swahilipot was equipped with 50 desktop computers by Jitume Labs, it opened up new possibilities, 
          especially in skill-sharing, attracting many young individuals eager to learn despite their lack of skills.
        </p>

        {/* Benefits to the Community */}
        <h2 className="text-2xl font-semibold mb-4">Benefits to the Community:</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            Leveraged community expertise and partnerships with local organizations to facilitate learning across various backgrounds.
          </li>
          <li>
            Offered interactive workshops, hands-on training, and mentorship programs to help participants gain new skills and explore their interests.
          </li>
          <li>
            Enhanced practical knowledge and technical skills, promoting collaboration, creativity, and innovation, and fostering a vibrant learning ecosystem within the community.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default JitumeLab;
