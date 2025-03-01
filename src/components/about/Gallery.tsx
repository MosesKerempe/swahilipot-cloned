import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  // This would typically come from your data file or CMS
  const images = [
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Tech workshop at SwahiliPot Hub",
      caption: "Tech workshop for local youth"
    },
    {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Art exhibition at SwahiliPot Hub",
      caption: "Local artists showcase at our gallery"
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Coding bootcamp",
      caption: "Intensive coding bootcamp for beginners"
    },
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Community meetup",
      caption: "Monthly community gathering"
    },
    {
      src: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Hackathon event",
      caption: "Annual hackathon competition"
    },
    {
      src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Youth performance",
      caption: "Cultural performance by local youth"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % images.length);
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A glimpse into our activities, events, and community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <div className="h-64 relative">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-700">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <button 
              className="absolute left-4 text-white text-4xl"
              onClick={() => navigateImage('prev')}
            >
              &#8249;
            </button>
            <div className="max-w-4xl max-h-[80vh]">
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt} 
                className="max-w-full max-h-[80vh] object-contain"
              />
              <p className="text-white text-center mt-4">{images[selectedImage].caption}</p>
            </div>
            <button 
              className="absolute right-4 text-white text-4xl"
              onClick={() => navigateImage('next')}
            >
              &#8250;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}