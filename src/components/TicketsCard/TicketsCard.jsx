import PropTypes from "prop-types";
import "./TicketsCard.css";

const TicketsCard = ({ date, title, authCode, area, qrcode }) => {
  return (
    <div className="tickets-card">
      <div className="date-icon">
        <span className="material-icons-outlined">calendar_today</span>
        <p>{date}</p>
      </div>
      <div className="event-details">
        <h4>{title}</h4>
        <div className="auth-code">
          <h4>{authCode}</h4>
          <p>Código de autenticação</p>
        </div>
      </div>
      <div className="qrcode">
        <p className="event-area" data-area={area}>
          {area}
        </p>
        <img src={qrcode} alt="QR Code" />
      </div>
    </div>
  );
};

TicketsCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authCode: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  qrcode: PropTypes.string.isRequired,
};

export default TicketsCard;