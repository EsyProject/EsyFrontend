import PropTypes from "prop-types";
import { InteractiveBubble } from "../index";
import "./AnimatedImage.css";

const AnimatedImage = ({ imageUrl }) => {
  return (
    <div className="gradient-bg">
      <div className="image-register-animated">
        <div className="gradients-container">
          <div className="bubble1"></div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
          <div className="bubble4"></div>
          <InteractiveBubble />
        </div>
        <img src={imageUrl} alt="login" />
      </div>
    </div>
  );
};

// PropTypes validation
AnimatedImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default AnimatedImage;
