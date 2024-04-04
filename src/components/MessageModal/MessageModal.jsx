import PropTypes from "prop-types";
import "material-symbols";
import "./MessageModal.css";

const MessageModal = ({ title, text, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="messagemodal-container">
      <div className="overlay" onClick={handleBackgroundClick}></div>
      <div className="messagemodal-content">
        <div className="messagemodal-icon">
          <span className="material-symbols-rounded">check</span>
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

MessageModal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MessageModal;
