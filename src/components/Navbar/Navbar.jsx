import PropTypes from "prop-types";
import "material-symbols";
import "./Navbar.css";

const Navbar = ({ currentPageIcon }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="rectangle">
          <span className="material-symbols-outlined">{currentPageIcon}</span>
        </div>
        <h2>Meus eventos</h2>
        <h4>Próximos eventos</h4>
        <h4>Histórico de eventos</h4>
        <span className="material-symbols-outlined">notifications</span>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  currentPageIcon: PropTypes.string.isRequired,
};

export default Navbar;
