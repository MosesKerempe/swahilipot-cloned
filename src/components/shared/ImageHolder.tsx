interface ImageHolderProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageHolder({ src, alt, className = "" }: ImageHolderProps) {
  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform hover:scale-105"
      />
    </div>
  );
}