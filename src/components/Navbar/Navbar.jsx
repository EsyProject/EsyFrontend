import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "material-symbols";
import "./Navbar.css";

const navLinks = [
  {
    key: "feed",
    text: "Feed de Eventos",
    href: "/feed",
  },
  {
    key: "description",
    text: "Descrição",
    href: "/description",
  },
  {
    key: "schedule",
    text: "Próximos Eventos",
    href: "/schedule",
  },
  {
    key: "historic",
    text: "Histórico de Eventos",
    href: "/historic",
  },
  {
    key: "tickets",
    text: "Tickets",
    href: "/tickets",
  },
];

const NavLink = ({ activePage, showNavigationTexts, text, href }) => (
  <Link to={href} className={activePage === href ? "active" : ""}>
    {showNavigationTexts && <h4 className={activePage === href ? "active" : ""}>{text}</h4>}
    {activePage === href && <div className={`subtitle-underline-${href.substr(1)}`}></div>}
  </Link>
);

NavLink.propTypes = {
  activePage: PropTypes.string.isRequired,
  showNavigationTexts: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Navbar = ({ currentPageIcon, activePage, showNavigationTexts, navigationText }) => (
  <div className="navbar-container">
    <div className="navbar-content">
      <div className="rectangle">
        <span className="material-symbols-outlined">{currentPageIcon}</span>
      </div>
      <h2>{navigationText}</h2>
      {navLinks.map(({ key, text, href }) => (
        <NavLink
          key={key}
          activePage={activePage}
          showNavigationTexts={showNavigationTexts}
          text={text}
          href={href}
        />
      ))}
    </div>
    <div className="navbar-icon">
      <span className="material-symbols-outlined">notifications</span>
    </div>
  </div>
);

Navbar.propTypes = {
  currentPageIcon: PropTypes.string.isRequired,
  activePage: PropTypes.string.isRequired,
  showNavigationTexts: PropTypes.bool.isRequired,
  navigationText: PropTypes.string.isRequired,
};

export default Navbar;
