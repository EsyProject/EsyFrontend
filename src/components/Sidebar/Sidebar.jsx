import { useState } from "react";
import PropTypes from "prop-types";
import { LogoEsy, LogoEsyClosed, IoIosArrowBack } from "../../pages/index";
import "./Sidebar.css";
import { SidebarIcon } from "../../pages/index";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <aside className={`sidebar border ${isOpen ? "open-sidebar" : ""}`}>
      <header className={`sidebar-header ${isOpen ? "active" : ""}`}>
        <div className="sidebar-logo-img">
          <img src={isOpen ? LogoEsy : LogoEsyClosed} alt="logo" />
        </div>
        <button className="open-btn" onClick={toggleSidebar}>
          <span className="open-btn-icon">
            <IoIosArrowBack />
          </span>
        </button>
      </header>

      <nav className="border">
        <div className="sidebar-content">
          <SidebarIcon
            iconName="notifications"
            text="Notificações"
            buttonClassName="icon-hover"
            className="notification"
            textClassName="sidebar-text"
            active={activeIcon === "notifications"}
            onClick={() => handleIconClick("notifications")}
          />
          <SidebarIcon
            iconName="home"
            text="Home"
            buttonClassName="icon-hover"
            className="home"
            textClassName="sidebar-text"
            active={activeIcon === "home"}
            onClick={() => handleIconClick("home")}
          />
          <div className="border-bottom"></div>
          <div className={`nav-text ${isOpen ? "active" : ""}`}>
            <h5>EVENTOS</h5>
          </div>
          <SidebarIcon
            iconName="calendar_month"
            text="Próximos eventos"
            buttonClassName="icon-hover"
            className="calendar"
            textClassName="sidebar-text"
            active={activeIcon === "calendar"}
            onClick={() => handleIconClick("calendar")}
          />
          <SidebarIcon
            iconName="history"
            text="Histórico"
            buttonClassName="icon-hover"
            className="clock"
            textClassName="sidebar-text"
            active={activeIcon === "history"}
            onClick={() => handleIconClick("history")}
          />
          <div className="border-bottom"></div>
          <div className={`nav-text ${isOpen ? "active" : ""}`}>
            <h5>GERAIS</h5>
          </div>
          <SidebarIcon
            iconName="person"
            text="Conta"
            buttonClassName="icon-hover"
            className="calendar"
            textClassName="sidebar-text"
            active={activeIcon === "account"}
            onClick={() => handleIconClick("account")}
          />
          <SidebarIcon
            iconName="tune"
            text="Configurações"
            buttonClassName="icon-hover"
            className="settings"
            textClassName="sidebar-text"
            active={activeIcon === "settings"}
            onClick={() => handleIconClick("settings")}
          />
        </div>
        <div className="logout-container">
          <SidebarIcon
            iconName="logout"
            text="Log out"
            buttonClassName="icon-hover-logout"
            className="logout icon-svg"
            textClassName="sidebar-text-logout"
            active={activeIcon === "logout"}
            onClick={() => handleIconClick("logout")}
          />
        </div>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
