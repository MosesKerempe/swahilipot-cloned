import React from 'react';

interface EmbedProps {
  src: string;
  title: string;
  height?: string;
  width?: string;
  allowFullScreen?: boolean;
  className?: string;
}

export default function Embed({ 
  src, 
  title, 
  height = "400px", 
  width = "100%", 
  allowFullScreen = true,
  className = ""
}: EmbedProps) {
  return (
    <div className={`embed-container ${className}`} style={{ position: 'relative', overflow: 'hidden', width, paddingTop: height }}>
      <iframe 
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={allowFullScreen}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0
        }}
      ></iframe>
    </div>
  );
}