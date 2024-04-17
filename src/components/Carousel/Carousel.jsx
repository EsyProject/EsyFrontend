import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.path} alt={image.name} />
          <div>
            <h3>{image.name}</h3>
            <p>{image.date}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
