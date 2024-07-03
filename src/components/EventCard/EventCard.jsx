import PropTypes from "prop-types";

import "./EventCard.css";

const EventCard = ({ audience, title, subtitle, date, time, location }) => {
  return (
    <div className="event-card">
      <div className="bubble-top-right"></div>
      <div className="bubble-bottom-left"></div>

      <div className="card-header">
        <p>{audience}</p>
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
      <div className="card-footer">
        <div className="info">
          <span className="material-symbols-outlined">calendar_month</span>
          <p>{date}</p>
        </div>
        <div className="info">
          <span className="material-symbols-outlined">schedule</span>
          <p>{time}</p>
        </div>
        <div className="info">
          <span className="material-symbols-outlined">location_on</span>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  audience: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string.isRequired,
  location: PropTypes.string,
};

export default EventCard;
