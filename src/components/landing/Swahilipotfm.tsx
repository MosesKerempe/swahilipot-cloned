import Link from 'next/link';

export default function Swahilipotfm() {
  return (
    <section className="py-16 bg-dark text-white">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
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
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎙️</div>
                  <p className="text-xl font-semibold">SwahiliPot FM</p>
                  <p className="text-gray-400">Live community radio</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-md">
                <div className="text-sm text-gray-400 mb-1">Now Playing</div>
                <div className="font-semibold">Youth Voices - Community Stories</div>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-md">
                <div className="text-sm text-gray-400 mb-1">Up Next</div>
                <div className="font-semibold">Tech Talk - Innovation in East Africa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}