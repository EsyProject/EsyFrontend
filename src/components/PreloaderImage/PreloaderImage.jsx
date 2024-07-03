import PropTypes from "prop-types";

const PreloaderImage = ({ src, alt }) => (
  <div className="circle">
    <img src={src} alt={alt} />
  </div>
);

PreloaderImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PreloaderImage;
