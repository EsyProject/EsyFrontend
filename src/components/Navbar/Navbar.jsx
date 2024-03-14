import PropTypes from 'prop-types';
import "material-symbols";
import "./Navbar.css";

const Navbar = ({ currentPageIcon }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-content">
          <div className="rectangle">
            <span className="material-symbols-outlined">{currentPageIcon}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  currentPageIcon: PropTypes.string.isRequired,
};

export default Navbar;
