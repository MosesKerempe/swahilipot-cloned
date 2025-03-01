import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Innovation in East Africa
          </h1>
          <p className="text-xl mb-8">
            SwahiliPot Hub is a collaborative space for technology, arts, and culture in Mombasa, Kenya.
            We nurture talent and foster innovation through various programs and initiatives.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Learn More
            </Link>
            <Link href="/joinus" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-primary transition-colors">
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}