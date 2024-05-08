import config from "../../config.json";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LogoEsy, LogoEsyClosed } from "../../pages/index";
import { SidebarIcon, ProfileModal, Logout } from "../../components/index";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar, activePage }) => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);

  // Function to handle profile icon click
  const handleProfileIconClick = () => {
    setProfileModalOpen(!profileModalOpen);
  };

  // Function to handle logout icon click
  const handleLogoutIconClick = () => {
    setLogoutOpen(!logoutOpen);
  };

  // Effect to update active icon when active page changes
  useEffect(() => {
    setActiveIcon(activePage);
  }, [activePage]);

  // User type access
  const userType = config.userType;

  // Function to handle icon click and set active icon
  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  // Effect to update active icon when activePage changes
  useEffect(() => {
    setActiveIcon(activePage);
  }, [activePage]);

  return (
    <aside className={`sidebar border ${isOpen ? "open-sidebar" : ""}`}>
      {/* Sidebar header */}
      <header className={`sidebar-header ${isOpen ? "active-header" : ""}`}>
        <div className="sidebar-logo-img">
          <img src={isOpen ? LogoEsy : LogoEsyClosed} alt="logo" />
        </div>
        {/* Button to toggle sidebar */}
        <button className="open-btn" onClick={toggleSidebar}>
          <span className="open-btn-icon">
            <span className="material-symbols-outlined">
              keyboard_arrow_left
            </span>
          </span>
        </button>
      </header>

      {/* Sidebar navigation */}
      <nav className="border">
        <div className="sidebar-content">
          {/* Navigation links */}
          <Link to="/authentication">
            <SidebarIcon
              iconName="qr_code_scanner"
              text="Autenticar"
              buttonClassName="icon-hover"
              className="autentication"
              textClassName="sidebar-text"
              active={activeIcon === "authentication"}
              onClick={() => handleIconClick("authentication")}
            />
          </Link>
          <Link to="/">
            <SidebarIcon
              iconName="home"
              text="Home"
              buttonClassName="icon-hover"
              className="home"
              textClassName="sidebar-text"
              active={activeIcon === "home"}
              onClick={() => handleIconClick("home")}
            />
          </Link>
          <div className="border-bottom"></div>
          <div className={`nav-text ${isOpen ? "active" : ""}`}>
            <h5>EVENTOS</h5>
          </div>

          {userType === "admin" && (
            <Link to="/create">
              <SidebarIcon
                iconName="calendar_add_on"
                text="Novo evento"
                buttonClassName="icon-hover"
                className="calendar"
                textClassName="sidebar-text"
                active={activeIcon === "calendar"}
                onClick={() => handleIconClick("calendar")}
              />
            </Link>
          )}

          {userType !== "admin" && (
            <Link to="/schedule">
              <SidebarIcon
                iconName="calendar_month"
                text="Próximos eventos"
                buttonClassName="icon-hover"
                className="calendar"
                textClassName="sidebar-text"
                active={activeIcon === "calendar"}
                onClick={() => handleIconClick("calendar")}
              />
            </Link>
          )}

          {/* Renders the 'Dashboard' link only if the user is an administrator */}
          {userType === "admin" && (
            <Link to="/dashboard">
              <SidebarIcon
                iconName="dashboard"
                text="Dashboard"
                buttonClassName="icon-hover"
                className="calendar"
                textClassName="sidebar-text"
                active={activeIcon === "dashboard"}
                onClick={() => handleIconClick("dashboard")}
              />
            </Link>
          )}

          {/* Renders the 'Tickets' link only if the user is not an administrator */}
          {userType !== "admin" && (
            <Link to="/tickets">
              <SidebarIcon
                iconName="confirmation_number"
                text="Tickets"
                buttonClassName="icon-hover"
                className="calendar"
                textClassName="sidebar-text"
                active={activeIcon === "confirmation_number"}
                onClick={() => setActiveIcon("confirmation_number")}
              />
            </Link>
          )}

          <Link to="/historic">
            <SidebarIcon
              iconName="history"
              text="Histórico"
              buttonClassName="icon-hover"
              className="clock"
              textClassName="sidebar-text"
              active={activeIcon === "history"}
              onClick={() => setActiveIcon("history")}
            />
          </Link>

          <div className="border-bottom"></div>
          <div className={`nav-text ${isOpen ? "active" : ""}`}>
            <h5>GERAIS</h5>
          </div>

          <SidebarIcon
            iconName="person"
            text="Conta"
            buttonClassName={`icon-hover ${profileModalOpen ? "active" : ""}`}
            className="calendar"
            textClassName="sidebar-text"
            active={activeIcon === "account"}
            onClick={handleProfileIconClick}
          />

          {/* Renders the profile modal if it is open */}
          {profileModalOpen && (
            <ProfileModal onClose={() => setProfileModalOpen(false)} />
          )}

          <Link to="/settings">
            <SidebarIcon
              iconName="tune"
              text="Configurações"
              buttonClassName="icon-hover"
              className="settings"
              textClassName="sidebar-text"
              active={activeIcon === "settings"}
              onClick={() => handleIconClick("settings")}
            />
          </Link>
        </div>

        {/* Logout link */}
        <div className="logout-container">
          <SidebarIcon
            iconName="logout"
            text="Log out"
            buttonClassName="icon-hover-logout"
            className="logout icon-svg"
            textClassName="sidebar-text-logout"
            active={activeIcon === "logout"}
            onClick={handleLogoutIconClick}
          />

          {/* Renders the logout modal if it is open */}
          {logoutOpen && (
            <Logout onClose={() => setLogoutOpen(false)} />
          )}
        </div>
      </nav>
    </aside>
  );
};

// PropTypes for Sidebar component
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  userType: PropTypes.string,
};

export default Sidebar;
