import Image from 'next/image';

const MekatililiSpace = () => {
  return (
    <section className="bg-white text-black">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-10 px-6 text-center">
        <h1 className="text-3xl font-bold">Mekatilili Space</h1>
        <p className="text-lg">Discover the Spirit of Mekatilili.</p>
      </div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Image Section */}
        <div className="w-full flex justify-center my-6">
          <Image src="/images/Mekatilili.jpg" alt="Mekatilili Space" width={800} height={450} className="rounded-lg shadow-lg" />
        </div>
        
        {/* Text Content */}
        <h2 className="text-2xl font-semibold mb-4">Discover the Spirit of Mekatilili</h2>
        <p className="mb-6">
          The Mekatilili Community Space is a versatile and welcoming area designed to host a wide range of activities and events. 
          With its open, airy design and ample natural light, it’s the perfect setting for gatherings, workshops, and cultural celebrations. 
          The space features modern amenities, comfortable seating, and is equipped with the latest audio-visual technology, making it ideal 
          for seminars, lectures, and community meetings.
        </p>
        
        {/* Benefits to the Community */}
        <h2 className="text-2xl font-semibold mb-4">Benefits to the Community:</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Education and Empowerment:</strong> Mekatilili Space is dedicated to promoting education and empowerment. 
            It serves as a hub for workshops, seminars, and skill-building sessions, allowing our community to learn and grow.
          </li>
          <li>
            <strong>Cultural Celebrations:</strong> From traditional dance performances to storytelling sessions, Mekatilili Space is the place where our 
            rich cultural heritage comes to life. It’s the perfect stage for celebrating our history and traditions.
          </li>
          <li>
            <strong>Community Meetings:</strong> Whether you’re planning a neighborhood association meeting or a local event, 
            Mekatilili Space offers a welcoming environment to gather and discuss community matters.
          </li>
          <li>
            <strong>Unity and Collaboration:</strong> Mekatilili Space is where people come together to collaborate, share ideas, 
            and work on initiatives that benefit our community. It’s a space where partnerships are forged and dreams become reality.
          </li>
        </ul>
        
        {/* Legacy Section */}
        <h2 className="text-2xl font-semibold mt-6">Mekatilili wa Menza: A Legacy of Strength</h2>
        <p className="mb-6">
          Mekatilili wa Menza was a fearless Kenyan woman who fought for the rights and freedom of her people during the colonial era. 
          She serves as an inspiration to us all, and her legacy continues to live on in the Mekatilili  Space. Join us in honoring her memory and building a stronger,more empowered community together.
        </p>
      </div>
    </section>
  );
};

export default MekatililiSpace;
