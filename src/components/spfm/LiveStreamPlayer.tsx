import styles from "@/styles/Livestream.module.css";

interface LiveStreamPlayerProps {
  title: string;
  isLive?: boolean;
}

export default function LiveStreamPlayer({ title, isLive = true }: LiveStreamPlayerProps) {
  const streamUrl = "https://player.restream.io/?token=68d2f8a7eac34f1c849a452c55ac1287";

  return (
    <div className="bg-dark rounded-lg overflow-hidden shadow-lg">
      <div className={styles.livestreamContainer}>
        {isLive && <div className={styles.liveIndicator}>LIVE</div>}
        
        {/* 🔹 Embed the Restream video player */}
        <iframe
          src={streamUrl}
          className={styles.livestreamPlayer}
          allowFullScreen
          allow="autoplay; encrypted-media"
          title={title}
        ></iframe>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-400 mb-4">
          Tune in for live discussions, performances, and community events.
        </p>
        
        <div className="flex items-center text-gray-400 text-sm">
          <div className="flex items-center mr-4">
            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <span>{isLive ? "Streaming now" : "Recorded"}</span>
          </div>
          
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 3.59 8 8-8 8-8-3.59-8-8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <span>SwahiliPot Hub</span>
          </div>
        </div>
      </div>
    </div>
  );
}
