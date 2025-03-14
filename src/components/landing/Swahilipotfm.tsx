import Link from 'next/link';
import Image from 'next/image';
import LiveStreamPlayer from '../spfm/LiveStreamPlayer';

export default function Swahilipotfm() {
  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Section with Background Color */}
          <div className="bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-white">SwahiliPot FM</h2>
            <p className="text-lg mb-6 text-gray-300">
              Our community radio station gives voice to local stories, music, and discussions. Tune in to hear the sounds and conversations shaping our community.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              SwahiliPot FM is run by youth from our community, providing them with media skills while creating content that matters to our audience.
            </p>
            <Link href="/spfm" className="bg-primary dark:bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors">
              Listen Live
            </Link>
          </div>

          {/* Right Section with the Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/fm.png" // Ensure the path to your image is correct
              alt="SwahiliPot FM"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
