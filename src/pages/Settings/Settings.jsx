import { useState } from "react";
import PropTypes from "prop-types";
import { Sidebar, Navbar } from "../../pages/index";
import "./Settings.css";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const UserInfo = ({ label, value }) => (
    <div className="user-info">
      <p>{label}</p>
      <h4>{value}</h4>
    </div>
  );

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

      <div className="section-container">
        <div className="user-account">
          <h2>Conta de Usuário</h2>
        </div>

        <div className="user-account-data">
          <UserInfo label="Nome do usuário" value="Manuela Souza" />
          <UserInfo
            label="E-mail de acesso"
            value="Souza.manuela@br.bosch.com"
          />
          <UserInfo label="Senha" value="••••••••••••••" />
        </div>
        <div className="border-bottom"></div>
      </div>

      <div className="section-container">
        <div className="section-header">
          <h2>Idioma e Localização</h2>
        </div>

        <div className="user-account-data">
          <UserInfo label="Idioma da aplicação" value="Português - BR" />
          <UserInfo label="Localização" value="São Paulo - Brasil" />
        </div>
        <div className="border-bottom"></div>
      </div>

      <div className="section-container">
        <div className="theme-backup">
          <div className="theme-section">
            <div className="section-header">
              <h2>Aparência do Sistema</h2>
            </div>

            <div className="user-account-data">
              <UserInfo
                label="Tema e aparência"
                value="Aparência padrão - Tema claro"
              />
            </div>
          </div>

          <div className="backup-section">
            <div className="section-header">
              <h2>Backup e Recuperação</h2>
            </div>

            <div className="user-account-data">
              <UserInfo
                label="E-mail de recuperação"
                value="Nenhum e-mail foi definido"
              />
            </div>
          </div>
        </div>
        <div className="border-bottom"></div>
      </div>

      <div className="section-container">
        <div className="section-header">
          <h2>Notifcações e Alertas</h2>
        </div>

        <div className="user-account-data">
          <UserInfo label="Permissões de notificações e alertas" />
        </div>

        <div className="user-account-data">
          <button
            className={`toggle-btn ${toggled ? "toggled" : ""}`}
            onClick={() => setToggled(!toggled)}
          >
            Toggle
          </button>

          <h4>Receber novidades sobre próximos eventos no e-mail</h4>
        </div>

        <div className="border-bottom"></div>
      </div>
    </div>
  );
};

Settings.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Settings;
