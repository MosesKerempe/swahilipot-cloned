"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { partners } from "../partners/partners-logos";

interface Partner {
  name: string;
  logo: string;
  link: string;
}

const Partners = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300, // Smooth transition speed
    slidesToShow: 4, // Number of logos visible in a row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Transition speed for autoplay
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="partners-section py-16 px-4 bg-blue-50 text-white dark:bg-gray-800">
      <h2 className="partners-title text-3xl font-bold text-center mb-12 text-gray-100 dark:text-gray-100">
        Our Partners
      </h2>
      <Slider {...sliderSettings} className="partners-slider">
        {partners.map((partner: Partner, index: number) => (
          <div key={index} className="partner-slide flex justify-center">
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo w-auto h-20 object-contain mx-auto transition-transform transform group-hover:scale-105"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;
