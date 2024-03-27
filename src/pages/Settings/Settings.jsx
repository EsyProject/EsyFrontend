import { useState } from "react";
import { Sidebar, Navbar } from "../../pages/index";
import "./Settings.css";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`settings-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="tune"
        activePage="settings"
        navigationText="Configurações"
      />

      <Sidebar
        activePage="settings"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main-settings">
        <div className="user-account">
          <h2>Conta de Usuário</h2>
        </div>

        <div className="user-account-data">
          <div className="user-info">
            <p>Nome do usuário</p>
            <h4>Manuela Souza</h4>
          </div>

          <div className="user-info">
            <p>E-mail de acesso</p>
            <h4>Souza.manuela@br.bosch.com</h4>
          </div>

          <div className="user-info">
            <p>Senha</p>
            <h4>••••••••••••••</h4>
          </div>
        </div>
        
        <div className="border-bottom"></div>

      </div>
    </div>
  );
};

export default Settings;
