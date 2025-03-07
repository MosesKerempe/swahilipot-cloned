import Image from 'next/image';

const AliMazruiCulturalCenter = () => {
  return (
    <section className="bg-white text-black">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-10 px-6 text-center">
        <h1 className="text-3xl font-bold">Ali Mazrui Cultural Center</h1>
        <p className="text-lg">Celebrating Intellectual Excellence.</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Image Section */}
        <div className="w-full flex justify-center my-6">
          <Image
            src="/images/AliMazurui.jpg" 
            alt="Ali Mazrui Cultural Center"
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <h2 className="text-2xl font-semibold mb-4">Celebrating Intellectual Excellence</h2>
        <p className="mb-6">
          The Ali Mazrui Cultural Center is a space where the legacy of one of Kenya’s most distinguished scholars and 
          intellectuals, Ali Mazrui, continues to shine. This center embodies his passion for knowledge, diversity, and 
          the power of ideas.
        </p>

        {/* Benefits to the Community */}
        <h2 className="text-2xl font-semibold mb-4">Benefits to the Community:</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>1: Learning and Research:</strong> The library at the Ali Mazrui Cultural Center is stocked with an extensive 
            collection of books, journals, and digital resources. It’s the perfect place for students, scholars, and lifelong 
            learners to engage with knowledge.
          </li>
          <li>
            <strong>2: Art and Culture:</strong> The art gallery showcases a rich tapestry of Kenyan and African art, fostering a 
            deeper appreciation for our cultural heritage. It also hosts exhibitions, workshops, and events that celebrate 
            local and international artistry.
          </li>
          <li>
            <strong>3: Community Dialogue:</strong> This space is ideal for discussions, lectures, and seminars on diverse topics. 
            It encourages open dialogue and intellectual exchange that can lead to community growth and understanding.
          </li>
          <li>
            <strong>4: Youth Empowerment:</strong> The Ali Mazrui Cultural Center offers mentorship programs, internships, and 
            events specifically tailored to empower the youth, inspiring the next generation of leaders and thinkers.
          </li>
        </ul>

        {/* Legacy Section */}
        <h2 className="text-2xl font-semibold mt-6">Ali Mazrui: A Scholar’s Legacy</h2>
        <p className="mb-6">
          Ali Mazrui was a scholar, philosopher, and public intellectual who made significant contributions to the fields 
          of political science and African studies. His commitment to addressing complex issues through intellectual 
          discourse continues to influence our community. The Ali Mazrui Cultural Center is a tribute to his enduring legacy.
        </p>
      </div>
    </section>
  );
};

export default AliMazruiCulturalCenter;
