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
  secondText,
  secondLink,
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
          <Link to={feedLink} className={activePage === "feed" ? "active" : ""}>
            {showNavigationTexts && (
              <h4 className={activePage === "feed" ? "active" : ""}>
                {feedText}
              </h4>
            )}
            {activePage === "feed" && <div className="subtitle-underline-feed"></div>}
          </Link>
        )}

        {/* Link to event history page */}
        {secondText && secondLink && (
          <Link to={secondLink} className={activePage === "historic" ? "active" : ""}>
            {showNavigationTexts && (
              <h4 className={activePage === "historic" ? "active" : ""}>
                {secondText}
              </h4>
            )}
            {activePage === "historic" && <div className="subtitle-underline"></div>}
          </Link>
        )}

        {/* Link to ticket page */}
        {ticketsText && ticketsLink && (
          <Link to={ticketsLink} className={activePage === "tickets" ? "active" : ""}>
            {showNavigationTexts && (
              <h4 className={activePage === "tickets" ? "active" : ""}>
                {ticketsText}
              </h4>
            )}
            {activePage === "tickets" && <div className="subtitle-underline-tickets"></div>}
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
  secondText: PropTypes.string,
  secondLink: PropTypes.string,
  ticketsText: PropTypes.string,
  ticketsLink: PropTypes.string,
};

export default Navbar;
