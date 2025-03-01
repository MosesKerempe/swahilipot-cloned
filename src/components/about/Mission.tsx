export default function Mission() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              SwahiliPot Hub's mission is to empower youth in East Africa through technology, arts, and culture, providing them with the skills, resources, and opportunities to innovate and create positive change in their communities.
            </p>
            <p className="text-lg text-gray-700">
              We strive to create an inclusive environment where young people can collaborate, learn, and grow, regardless of their background or previous experience.
            </p>
          </div>
          <div className="bg-light p-8 rounded-lg">
            <div className="text-5xl text-primary mb-4">🚀</div>
            <h3 className="text-2xl font-semibold mb-4">Key Objectives</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Foster innovation and entrepreneurship among youth</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Provide access to technology education and resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Promote cultural expression through arts and creativity</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Build a supportive community for collaboration and growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Connect youth with opportunities in the digital economy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}