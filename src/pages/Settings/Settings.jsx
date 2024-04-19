import { useState } from "react";
import PropTypes from "prop-types";
import { Sidebar, Navbar, ButtonLink } from "../../components/index";
import "./Settings.css";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toggled1, setToggled1] = useState(false);
  const [toggled2, setToggled2] = useState(false);
  const [toggled3, setToggled3] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const UserInfo = ({ label, value }) => (
    <div className="user-info-settings">
      <p>{label}</p>
      <h4>{value}</h4>
    </div>
  );

  UserInfo.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
  };

  return (
    <div className={`settings-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="tune"
        activePage="settings"
        navigationText="Configurações"
        showNavigationTexts={false}
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

        <div className="user-account-notifications">
          <UserInfo label="Permissões de notificações e alertas" />
        </div>

        <div className="user-account-permissions">
          <button
            className={`toggle-btn ${toggled1 ? "toggled" : ""}`}
            onClick={() => setToggled1(!toggled1)}
          >
            <div className="thumb"></div>
          </button>

          <h4>Receber novidades sobre próximos eventos no e-mail</h4>
        </div>

        <div className="user-account-permissions">
          <button
            className={`toggle-btn ${toggled2 ? "toggled" : ""}`}
            onClick={() => setToggled2(!toggled2)}
          >
            <div className="thumb"></div>
          </button>

          <h4>Receber alerta de evento próximo</h4>
        </div>

        <div className="user-account-permissions">
          <button
            className={`toggle-btn ${toggled3 ? "toggled" : ""}`}
            onClick={() => setToggled3(!toggled3)}
          >
            <div className="thumb"></div>
          </button>

          <h4>Guardar informações de locais e senhas</h4>
        </div>
      </div>

      <div className="section-container">
        <div className="button-container">
          <a href="">
            <span>Descartar alterações</span>
          </a>
          <ButtonLink to="/historic">Salvar alterações</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Settings;
