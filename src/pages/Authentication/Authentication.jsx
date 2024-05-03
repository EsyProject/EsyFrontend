import { useState } from "react";
import { Sidebar, Navbar, Input, ButtonLink, ReaderQR } from "../../components/index";
import "./Authentication.css";

const Authentication = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`authentication-container ${
        sidebarOpen ? "sidebar-open" : ""
      }`}
    >
      <Navbar
        currentPageIcon="qr_code_scanner"
        activePage="authentication"
        showNavigationTexts={false}
        navigationText="Autenticação"
      />

      <Sidebar
        activePage="authentication"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main-authentication">
        <h2 className="title">Scan QR code</h2>
        <p className="subtitle">Aponte a foto do seu Qr code para a câmera</p>

        <div className="reder">
          <ReaderQR />
        </div>

        <div className="input-container">
          <p className="guidance">Ou entre com o código manualmente</p>

          <Input placeholder="Ex.: 5845215" className="input-style" />

          <div className="container-button-authentication">
            <ButtonLink>Autenticar</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
