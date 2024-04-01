import PropTypes from "prop-types";
import "material-symbols";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  currentPageIcon,
  activePage,
  showNavigationTexts,
  navigationText,
}) => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* Container for icon */}
        <div className="rectangle">
          <span className="material-symbols-outlined">{currentPageIcon}</span>
        </div>

        <h2>{navigationText}</h2>

        {/* Link to the schedule page */}
        {showNavigationTexts && (
          <Link to="/schedule">
            <h4 className={activePage === "schedule" ? "active" : ""}>
              Próximos eventos
            </h4>
          </Link>
        )}

        {/* Link to the historic page */}
        <Link to="/historic">
          <div
            className={
              activePage === "schedule" ? "active subtitle-underline-next" : ""
            }
          ></div>
          {showNavigationTexts && (
            <h4 className={activePage === "historic" ? "active" : ""}>
              Histórico de eventos
            </h4>
          )}
        </Link>

        {/* Link to the tickets page */}
        {showNavigationTexts && (
          <Link to="/tickets">
            <div
              className={`${
                activePage === "tickets" ? "active subtitle-underline-tickets" : ""
              }`}
            ></div>
            <h4 className={activePage === "tickets" ? "active" : ""}>
              Tickets
            </h4>
          </Link>
        )}

        {/* Underline for the "Historical Events" navigation */}
        <div
          className={
            activePage === "historic" ? "active subtitle-underline" : ""
          }
        ></div>
      </div>
      {/* Container for notification icon */}
      <div className="navbar-icon">
        <span className="material-symbols-outlined">notifications</span>
      </div>
    </div>
  );
};

// PropTypes for Navbar component
Navbar.propTypes = {
  currentPageIcon: PropTypes.string.isRequired,
  activePage: PropTypes.string.isRequired,
  showNavigationTexts: PropTypes.bool.isRequired,
  navigationText: PropTypes.string.isRequired,
};

export default Navbar;
