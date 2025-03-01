import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/RadioStream.module.css';

interface RadioStreamProps {
  streamUrl: string;
  title: string;
}

export default function RadioStream({ streamUrl, title }: RadioStreamProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };
  
  // Cleanup function to pause the audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
      }
    };
  }, [isPlaying]);

  return (
    <div className={styles.radioContainer}>
      <audio ref={audioRef} src={streamUrl} />
      
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">
        Listen to our community radio station featuring local music, discussions, and stories.
      </p>
      
      <div className={styles.playerControls}>
        <div 
          className={styles.playButton}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </div>
        
        <div className="flex items-center">
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className={styles.volumeControl}
          />
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-700">
        <h3 className="text-lg font-medium mb-3">Now Playing</h3>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-700 rounded-md mr-4"></div>
          <div>
            <div className="font-medium">Community Voices</div>
            <div className="text-sm text-gray-400">SwahiliPot FM</div>
          </div>
        </div>
      </div>
    </div>
  );
}