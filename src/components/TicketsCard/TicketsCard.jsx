import PropTypes from "prop-types";
import "material-symbols";
import "./TicketsCard.css";

const TicketsCard = ({ date, title, authCode, area, qrcode }) => {
  return (
    <div className="tickets-card">
      <div className="rectangle-ticket" data-area={area}></div>
      <div className="event-details">
        <div className="date-icon">
          <span className="material-symbols-outlined">calendar_today</span>
          <p>{date}</p>
        </div>

        <h4>{title}</h4>
        <div className="auth-code">
          <h4>{authCode}</h4>
          <p>Código de autenticação</p>
        </div>
      </div>
      <div className="qrcode">
        <div className="event-area" data-area={area}>
        {area}
        </div>
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
  qrcode: PropTypes.string,
};

export default TicketsCard;
