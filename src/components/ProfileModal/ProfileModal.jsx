import { useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Logout } from "../../components/index";
import "./ProfileModal.css";

const ProfileModal = ({ onClose }) => {
  const colors = useMemo(
    () => ["#D543CB", "#4AB073", "#54ABA5", "#0096E8", "#7EBDFF", "#A1DFDB"],
    []
  );
  const [actualColor, setActualColor] = useState(colors[0]);
  const modalRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  // open popup when cancel button is pressed
  const handleCancel = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setActualColor(randomColor);

    // event listener to capture clicks outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, colors]);

  return (
    <div className="modal-profile-modal">
      <div ref={modalRef} className="modal-profile-modal-content">
        <div className="circle" style={{ backgroundColor: actualColor }}>
          <h1>M</h1>
        </div>
        <h2>Manuela Rocha</h2>

        <div className="links">
          <Link to="/settings">Configurações</Link>
          <hr />
          <button onClick={handleCancel}>
            <p>Log out</p>
          </button>
        </div>
      </div>

      {showPopup && (
        <Logout />
      )}
    </div>
  );
};

ProfileModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProfileModal;
