import PropTypes from "prop-types";
import "material-symbols";
import "./TagCard.css";

const TagCard = ({ date, title, description, area }) => {
  return (
    <div className="simple-event-card">
      <div className="rectangle-event" data-area={area}></div>
      <div className="event-details">
        <div className="date-area">
          <div className="date-icon">
            <span className="material-symbols-outlined">calendar_today</span>
            <p>{date}</p>
          </div>

          <div className="event-area" data-area={area}>
            {area}
          </div>
        </div>

        <h4>{title}</h4>
        <p className="event-description">{description}</p>
      </div>
    </div>
  );
};

TagCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};

export default TagCard;
