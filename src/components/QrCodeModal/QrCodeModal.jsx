import PropTypes from "prop-types";
import "material-symbols";
import "./QrCodeModal.css";

const QrCodeModal = ({ image, code, onClose, showModal }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`messagemodal-container ${showModal ? "visible" : ""}`}>
      <div className="overlay" onClick={handleBackgroundClick}></div>
      <div className="qrcodemodal-content">
        <h2>Aponte a foto para o leitor de QR Code</h2>
        <img src={image} alt="QR Code" />
        <h3>ou digite este código:</h3>
        <p>{code}</p>
      </div>
    </div>
  );
};

QrCodeModal.propTypes = {
  image: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  showModal: PropTypes.bool,
};

export default QrCodeModal;
