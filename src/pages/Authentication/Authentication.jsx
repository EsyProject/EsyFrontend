import { useState, useEffect } from "react";
import {
  Sidebar,
  Navbar,
  Input,
  ButtonLink,
  ReaderQR,
} from "../../components/index";
import "./Authentication.css";

const Authentication = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleQrCodeScan = (value) => {
    if (!qrCodeValue) {
      console.log("QR code scanned:", value);
      setQrCodeValue(value);
    }
  };

  // Atualizar o valor do input sempre que qrCodeValue mudar
  useEffect(() => {
    setQrCodeValue(qrCodeValue);
  }, [qrCodeValue]);

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
          <ReaderQR onQrCodeScan={handleQrCodeScan} />{" "}
        </div>

        <div className="input-container">
          <p className="guidance">Ou entre com o código manualmente</p>

          <Input
            placeholder="Ex.: 5845215"
            className="input-style"
            value={qrCodeValue}
          />

          <div className="container-button-authentication">
            <ButtonLink>Autenticar</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
