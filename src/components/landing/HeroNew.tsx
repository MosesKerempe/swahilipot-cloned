import Link from 'next/link';
import Image from 'next/image';
import '../../styles/HeroNew.module.css';

export default function HeroNew() {
  return (
    <section className="hero-gradient text-white py-24">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-animation">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Youth Through Technology & Arts
            </h1>
            <p className="text-xl mb-8 opacity-90">
              SwahiliPot Hub is a collaborative space where innovation meets
              creativity, nurturing the next generation of leaders in East
              Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Discover Our Story
              </Link>
              <Link
                href="/joinus"
                className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-primary transition-colors"
              >
                Join Our Community
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm border border-white border-opacity-20">
              <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>

              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-md hover:bg-opacity-20 transition-all">
                  <div className="text-sm font-medium mb-1">March 15, 2025</div>
                  <h3 className="font-semibold mb-1">Tech Hackathon 2025</h3>
                  <p className="text-sm opacity-80">
                    A 48-hour coding challenge to solve local community
                    problems.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-4 rounded-md hover:bg-opacity-20 transition-all">
                  <div className="text-sm font-medium mb-1">April 5, 2025</div>
                  <h3 className="font-semibold mb-1">Women in Tech Summit</h3>
                  <p className="text-sm opacity-80">
                    Celebrating and empowering women in technology fields.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-4 rounded-md hover:bg-opacity-20 transition-all">
                  <div className="text-sm font-medium mb-1">May 20, 2025</div>
                  <h3 className="font-semibold mb-1">
                    Youth Innovation Showcase
                  </h3>
                  <p className="text-sm opacity-80">
                    Showcasing innovative projects by young entrepreneurs.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <Link
                  href="/programs/events"
                  className="text-white font-medium hover:underline"
                >
                  View All Events →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
