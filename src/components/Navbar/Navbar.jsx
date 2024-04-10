import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  currentPageIcon,
  activePage,
  showNavigationTexts,
  navigationText,
  tabs,
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

        {/* Renderização das guias */}
        {tabs.map((tab, index) => (
          <Link key={index} to={tab.link} className={activePage === tab.name ? "active" : ""}>
            {showNavigationTexts && (
              <h4 className={activePage === tab.name ? "active" : ""}>
                {tab.text}
              </h4>
            )}
            {activePage === tab.name && <div className={`subtitle-underline-${tab.name}`}></div>}
          </Link>
        ))}
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
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
