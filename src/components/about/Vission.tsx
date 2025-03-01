export default function Vission() {
  return (
    <section className="py-16 bg-light">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white p-8 rounded-lg shadow-md">
            <div className="text-5xl text-primary mb-4">🔭</div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision for the Future</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span>A thriving tech ecosystem in East Africa</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span>Youth-led innovation addressing local challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span>Preservation and digitization of cultural heritage</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span>Increased participation of women in technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span>Global recognition of East African talent and creativity</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              We envision an East Africa where youth are at the forefront of technological innovation and cultural expression, creating solutions to local challenges and contributing to the global digital economy.
            </p>
            <p className="text-lg text-gray-700">
              SwahiliPot Hub aims to be the leading hub for technology and arts in the region, known for nurturing talent, fostering innovation, and preserving cultural heritage through digital means.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}