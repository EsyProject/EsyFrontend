import PropTypes from "prop-types";
import "material-symbols";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ currentPageIcon, activePage }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="rectangle">
          <span className="material-symbols-outlined">{currentPageIcon}</span>
        </div>
        <h2>Meus eventos</h2>
        <Link to="/schedule">
          {" "}
          <h4 className={activePage === "proximos-eventos" ? "active" : ""}>
            Próximos eventos
          </h4>
        </Link>
        <div
          className={
            activePage === "proximos-eventos"
              ? "active subtitle-underline-next"
              : ""
          }
        ></div>
        <h4 className={activePage === "historic" ? "active" : ""}>
          Histórico de eventos
        </h4>
        <div
          className={
            activePage === "historic" ? "active subtitle-underline" : ""
          }
        ></div>
      </div>
      <div className="navbar-icon">
        <span className="material-symbols-outlined">notifications</span>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  currentPageIcon: PropTypes.string.isRequired,
  activePage: PropTypes.string.isRequired,
};

export default Navbar;
