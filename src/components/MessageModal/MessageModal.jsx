import PropTypes from "prop-types";
import "material-symbols";
import "./MessageModal.css";

const MessageModal = ({ title, text }) => {
  return (
    <div className="messagemodal-container">
      <div className="overlay"></div>
      <div className="messagemodal-content">
        <div className="messagemodal-icon">
          <span className="material-symbols-outlined">check</span>
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
};

export default MessageModal;
