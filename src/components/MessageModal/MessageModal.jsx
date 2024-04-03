import PropTypes from "prop-types";
import "material-symbols";

const PopUp = ({ title, text }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-icon">
          <span className="material-symbols-outlined">check</span>
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

PopUp.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PopUp;
