import { useState } from "react";
import PropTypes from "prop-types";
import "material-symbols";
import "./CardView.css";
import CardViewModal from "../CardViewModal/CardViewModal";

const CardView = ({ date, title, description, area, img }) => {

  // estado do modal de descrição
  const [isCardViewModalOpen, setIsCardViewModalOpen] = useState(false);

  // fazer com que o texto não apaeça inteiro no card
  const maxLength = 150;
  const minDescription =
    description.length > maxLength
      ? description.slice(0, maxLength) + '...'
      : description;

  const handleOpenCardViewModal = () => {
    setIsCardViewModalOpen(true);
  };

  const handleCloseCardViewModal = () => {
    setIsCardViewModalOpen(false);
  };

  return (
    <div className="simple-event-card-view">
      <div className="rectangle-event" data-area={area}></div>
      <div className="event-details">
        <div className="date-area-card-view">
          <div className="date-icon">
            <span className="material-symbols-outlined">calendar_today</span>
            <p>{date}</p>
          </div>

          <div className="event-area" data-area={area}>
            {area}
          </div>
        </div>

        <h4>{title}</h4>
        <p className="event-description">{minDescription}</p>
      </div>

      <button className="card-view-btn" onClick={handleOpenCardViewModal}>
        <span className="material-symbols-rounded">pan_zoom</span>
      </button>

      {/* teste */}

      {isCardViewModalOpen && (
        <CardViewModal onClose={handleCloseCardViewModal}>
          <div className="card-view-modal-container-main">
            <div className="card-view-modal-content-local">
              <img src={img} />
            </div>
            <div className="card-view-modal-content">
              <p>{area}</p>
              <h4>{title}</h4>
              <p>{date}</p>
              <p>{description}</p>
              <button onClick={handleCloseCardViewModal}>Fechar</button>
            </div>
          </div>
        </CardViewModal>
      )}
    </div>
  );
};

CardView.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  // img: PropTypes.string.isRequired,
};

export default CardView;
