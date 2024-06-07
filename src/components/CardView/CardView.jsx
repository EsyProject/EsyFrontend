import { useState } from "react";
import PropTypes from "prop-types";
import "material-symbols";
import "./CardView.css";
import { useNavigate } from "react-router-dom";
import CardViewModal from "../CardViewModal/CardViewModal";
import { format } from 'date-fns';

const CardView = ({ nameOfEvent, finishTime, initialDate, initialTime, localEvent, responsible_area, description = '', img, eventId }) => {
  const [isCardViewModalOpen, setIsCardViewModalOpen] = useState(false);
  const navigate = useNavigate();

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

  const formatTime = (time) => {
    return format(new Date(`1970-01-01T${time}`), 'HH:mm');
  };

  const handleEditEvent = () => {
    navigate(`/update`, { state: { eventId } });
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
                  <button onClick={handleEditEvent} className="card-view-modal-btn edit">
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
  nameOfEvent: PropTypes.string,
  finishDate: PropTypes.string,
  finishTime: PropTypes.string,
  initialDate: PropTypes.string,
  initialTime: PropTypes.string,
  localEvent: PropTypes.string,
  responsible_area: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  eventId: PropTypes.number.isRequired,
};

export default CardView;
