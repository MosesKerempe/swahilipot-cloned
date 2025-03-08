import Link from 'next/link';
import Image from 'next/image';
import LiveStreamPlayer from '../spfm/LiveStreamPlayer';

export default function Swahilipotfm() {
  return (
    <section className="py-16 text-white bg-blue-50">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left section with background color */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">SwahiliPot FM</h2>
            <p className="text-lg mb-6">
              Our community radio station gives voice to local stories, music, and discussions. Tune in to hear the sounds and conversations shaping our community.
            </p>
            <p className="text-lg mb-8">
              SwahiliPot FM is run by youth from our community, providing them with media skills while creating content that matters to our audience.
            </p>
            <Link href="/spfm" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors">
              Listen Live
            </Link>
          </div>

          {/* Right section with the image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/fm.png" // Ensure the path to your image is correct
              alt="SwahiliPot FM"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
