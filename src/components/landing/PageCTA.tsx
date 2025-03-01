import Link from 'next/link';

export default function PageCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container-custom mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Whether you're a tech enthusiast, artist, or change-maker, there's a place for you at SwahiliPot Hub.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/joinus" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Join Us Today
          </Link>
          <Link href="/contact" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-primary transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}