import { useState } from "react";
import PropTypes from "prop-types";
import "material-symbols";
import "./CardView.css";
import CardViewModal from "../CardViewModal/CardViewModal";
import { format, addDays } from 'date-fns';

const CardView = ({ nameOfEvent, finishDate, finishTime, initialDate, initialTime, localEvent, responsible_area, description, img }) => {
  const [isCardViewModalOpen, setIsCardViewModalOpen] = useState(false);

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

  const formatDate = (date) => {
    const adjustedDate = addDays(new Date(date), 1);
    return format(adjustedDate, 'yyyy-MM-dd');
  };

  const formatTime = (time) => {
    return format(new Date(`1970-01-01T${time}:00`), 'HH:mm:ss');
  };

  return (
    <div className="simple-event-card-view">
      <div className="rectangle-event" data-area={responsible_area}></div>
      <div className="event-details">
        <div className="date-area-card-view">
          <div className="date-icon">
            <span className="material-symbols-outlined">calendar_today</span>
            <p>{initialDate}</p>
          </div>
          <div className="event-area" data-area={responsible_area}>
            {responsible_area}
          </div>
        </div>
        <h4>{nameOfEvent}</h4>
        <p className="event-description">{minDescription}</p>
      </div>
      <button className="card-view-btn" onClick={handleOpenCardViewModal}>
        <span className="material-symbols-rounded">pan_zoom</span>
      </button>

      {isCardViewModalOpen && (
        <CardViewModal onClose={handleCloseCardViewModal}>
          <div className="card-view-modal-content">
            <div className="card-view-modal-content-child">
              <img src={img} alt="Event" />
            </div>
            <div className="card-view-modal-content-child">
              <div className="child">
                <div className="card-btn-container">
                  <button onClick={handleCloseCardViewModal} className="card-view-modal-btn edit">
                    <span className="material-symbols-rounded">stylus</span>
                    <p>Editar informações do evento</p>
                  </button>
                  <button onClick={handleCloseCardViewModal} className="card-view-modal-btn clos">
                    <span className="material-symbols-rounded">close</span>
                    <p>Fechar</p>
                  </button>
                </div>
                <div className="flag-area">
                  <div className="event-area" data-area={responsible_area}>{responsible_area}</div>
                </div>
                <h1>{nameOfEvent}</h1>
                <div className="info-wrapper">
                  <div className="info-date">
                    <span className="material-symbols-outlined">calendar_month</span>
                    <p>{initialDate}</p>
                  </div>
                  <div className="info-date">
                    <span className="material-symbols-outlined">schedule</span>
                    <p>{formatTime(initialTime)} às {formatTime(finishTime)}</p>
                  </div>
                  <div className="info-date">
                    <span className="material-symbols-outlined">location_on</span>
                    <p>{localEvent}</p>
                  </div>
                </div>
                <p className="description">{description}</p>
              </div>
            </div>
          </div>
        </CardViewModal>
      )}
    </div>
  );
};

CardView.propTypes = {
  nameOfEvent: PropTypes.string.isRequired,
  finishDate: PropTypes.string.isRequired,
  finishTime: PropTypes.string.isRequired,
  initialDate: PropTypes.string.isRequired,
  initialTime: PropTypes.string.isRequired,
  localEvent: PropTypes.string.isRequired,
  responsible_area: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardView;
