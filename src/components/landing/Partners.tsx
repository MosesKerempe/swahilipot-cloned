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
    speed: 300, // Increased speed
    slidesToShow: 4, // Keeps the number of logos in a line
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Increased speed of transition
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="partners-section">
      <h2 className="partners-title">Our Partners</h2>
      <Slider {...sliderSettings} className="partners-slider">
        {partners.map((partner: Partner, index: number) => (
          <div key={index} className="partner-slide">
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;
