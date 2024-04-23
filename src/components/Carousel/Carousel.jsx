import React from 'react';
import "./Carousel.css"

const Carousel = ({ images }) => {
  return (
    <div className='wrapper'>
      {images.map((image, index) => (
        <div className='item' key={index} style={{backgroundImage: `url(${image})`}}></div>
      ))}
    </div>
  );
};

export default Carousel;
