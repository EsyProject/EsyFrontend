import PropTypes from "prop-types";
import "material-symbols";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  currentPageIcon,
  activePage,
  showNavigationTexts,
  navigationText,
  feedText,
  feedLink,
  historicText,
  historicLink,
  ticketsText,
  ticketsLink,
}) => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* Container for icon */}
        <div className="rectangle">
          <span className="material-symbols-outlined">{currentPageIcon}</span>
        </div>

        {/* Navigation text */}
        <h2>{navigationText}</h2>

        {/* Link to event feed page */}
        {feedText && feedLink && (
          <Link to={feedLink}>
            <div className={activePage === "feed" ? "active" : ""}></div>
            {showNavigationTexts && (
              <h4 className={activePage === "feed" ? "active" : ""}>
                {feedText}
              </h4>
            )}
          </Link>
        )}

        {/* Link to event history page */}
        {historicText && historicLink && (
          <Link to={historicLink}>
            <div className={activePage === "historic" ? "active" : ""}></div>
            {showNavigationTexts && (
              <h4 className={activePage === "historic" ? "active" : ""}>
                {historicText}
              </h4>
            )}
          </Link>
        )}

        {/* Link to ticket page */}
        {ticketsText && ticketsLink && (
          <Link to={ticketsLink}>
            <div className={activePage === "tickets" ? "active" : ""}></div>
            {showNavigationTexts && (
              <h4 className={activePage === "tickets" ? "active" : ""}>
                {ticketsText}
              </h4>
            )}
          </Link>
        )}
      </div>
      {/* Container para o ícone de notificação */}
      <div className="navbar-icon">
        <span className="material-symbols-outlined">notifications</span>
      </div>
    </div>
  );
};

// PropTypes para o componente Navbar
Navbar.propTypes = {
  currentPageIcon: PropTypes.string.isRequired,
  activePage: PropTypes.string.isRequired,
  showNavigationTexts: PropTypes.bool.isRequired,
  navigationText: PropTypes.string.isRequired,
  feedText: PropTypes.string,
  feedLink: PropTypes.string,
  historicText: PropTypes.string,
  historicLink: PropTypes.string,
  ticketsText: PropTypes.string,
  ticketsLink: PropTypes.string,
};

export default Navbar;
