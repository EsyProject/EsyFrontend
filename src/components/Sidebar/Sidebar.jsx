import { useState } from "react";
import { LogoEsy, LogoEsyClosed, IoIosArrowBack } from "../../pages/index";
import "./Sidebar.css";
import { SidebarIcon } from "../../pages/index";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <aside className={`sidebar border ${sidebarOpen ? "open-sidebar" : ""}`}>
      <header className="sidebar-header">
        <div className="sidebar-logo-img">
          <img src={sidebarOpen ? LogoEsy : LogoEsyClosed} alt="logo" />
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
            className="notification icon-hover"
            textClassName="sidebar-text"
            active={activeIcon === "notifications"}
            onClick={() => handleIconClick("notifications")}
          />
          <SidebarIcon
            iconName="home"
            text="Home"
            className="home icon-hover"
            textClassName="sidebar-text"
            active={activeIcon === "home"}
            onClick={() => handleIconClick("home")}
          />
          <div className="border-bottom icon-hover"></div>
          <div className={`nav-text ${sidebarOpen ? "active" : ""}`}>
            <h5>EVENTOS</h5>
          </div>
          <SidebarIcon
            iconName="calendar_month"
            text="Próximos eventos"
            className="calendar icon-hover"
            textClassName="sidebar-text"
            active={activeIcon === "calendar"}
            onClick={() => handleIconClick("calendar")}
          />
          <SidebarIcon
            iconName="history"
            text="Histórico"
            className="clock icon-hover"
            textClassName="sidebar-text"
            active={activeIcon === "history"}
            onClick={() => handleIconClick("history")}
          />
          <div className="border-bottom icon-hover"></div>
          <div className={`nav-text ${sidebarOpen ? "active" : ""}`}>
            <h5>GERAIS</h5>
          </div>
          <SidebarIcon
            iconName="person"
            text="Conta"
            className="calendar icon-hover"
            textClassName="sidebar-text"
            active={activeIcon === "account"}
            onClick={() => handleIconClick("account")}
          />
          <SidebarIcon
            iconName="tune"
            text="Configurações"
            className="settings icon-hover"
            textClassName="sidebar-text"
            active={activeIcon === "settings"}
            onClick={() => handleIconClick("settings")}
          />
        </div>
        <div className="logout-container">
          <SidebarIcon
            iconName="logout"
            text="Log out"
            className="logout icon-svg icon-hover-logout"
            textClassName="sidebar-text-logout"
            active={activeIcon === "logout"}
            onClick={() => handleIconClick("logout")}
          />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
