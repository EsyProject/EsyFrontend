import { useState } from "react";
import { Sidebar, Navbar } from "../../pages/index";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`historic-container ${sidebarOpen ? "sidebar-open" : ""}`}>
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

      <div className="container-main">
        <div>
          <h3>Conta de Usuário</h3>

          <div>
            <p>Nome do usuário</p>
            <p>Manuela Souza</p>
          </div>

          <div>
            <p>E-mail de acesso</p>
            <p>Souza.manuela@br.bosch.com</p>
          </div>

          <div>
            <p>Senha</p>
            <p>••••••••••••••</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
