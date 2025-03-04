'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const HeroNew = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: '/images/slide1.jpg',
      title: 'Welcome to Our Platform',
      description: 'Discover amazing content and explore new possibilities.',
    },
    {
      id: 2,
      image: '/images/slide2.jpg',
      title: 'Stay Informed',
      description: 'Get the latest updates and news at your fingertips.',
    },
    {
      id: 3,
      image: '/images/slide3.jpg',
      title: 'Join Our Community',
      description: 'Connect, share, and grow with like-minded individuals.',
    },
  ];

  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[500px]">
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
              <p className="text-lg md:text-xl mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroNew;
