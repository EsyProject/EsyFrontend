import PropTypes from "prop-types";
import "./Carousel.css"

const Carousel = ({ images }) => {
  return (
    <div className='wrapper'>
      {images.map((image, index) => (
        <div className='item' key={index}>
          <img src={image.src} alt={`Imagem ${index + 1}`} />
          <div className="overlay"></div>
          <div className="text">
            <h1>{image.text.title}</h1>
            <p>{image.text.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
