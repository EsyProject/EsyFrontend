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
            <p>Manuela Souza</p>
          </div>

          <div className="user-info">
            <p>E-mail de acesso</p>
            <p>Souza.manuela@br.bosch.com</p>
          </div>

          <div className="user-info">
            <p>Senha</p>
            <p>••••••••••••••</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;
