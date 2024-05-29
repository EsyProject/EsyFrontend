import React from "react";
import PropTypes from "prop-types";
import "./CardViewModal.css";

const CardViewModal = ({ children }) => {
  return (
    <div className="card-view-modal-overlay">
      <div className="card-view-modal-content">
        {children}
      </div>
    </div>
  );
};

CardViewModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardViewModal;