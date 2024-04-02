import PropTypes from "prop-types";
import "./EventCard.css";

const EventCard = ({ audience, title, subtitle, date, time, location }) => {
  return (
    <div className="event-card">
      <div className="card-header">
        <p>{audience}</p>
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <div className="card-footer">
        <div className="info">
          <span className="material-symbols-outlined">calendar_month</span>
          <h4>{date}</h4>
        </div>
        <div className="info">
          <span className="material-symbols-outlined">schedule</span>
          <h4>{time}</h4>
        </div>
        <div className="info">
          <span className="material-symbols-outlined">location_on</span>
          <h4>{location}</h4>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  audience: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default EventCard;
