import PropTypes from "prop-types";
import "./EventCard.css";

const EventCard = ({ audience, title, subtitle, icon, date, time, location }) => {
  return (
    <div className="event-card">
      <div className="card-header">
        <span className="material-icons">{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <h4>{subtitle}</h4>
        <p>{audience}</p>
      </div>
      <div className="card-footer">
        <div className="info">
          <span className="material-icons">date_range</span>
          <p>{date}</p>
        </div>
        <div className="info">
          <span className="material-icons">schedule</span>
          <p>{time}</p>
        </div>
        <div className="info">
          <span className="material-icons">location_on</span>
          <p>{location}</p>
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
