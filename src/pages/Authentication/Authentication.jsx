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

  // Update the input value whenever qrCodeValue changes
  useEffect(() => {
    setQrCodeValue(qrCodeValue);
  }, [qrCodeValue]);

  const handleInputChange = (event) => {
    setQrCodeValue(event.target.value);
  };

  return (
    <div
      className={`authentication-container ${sidebarOpen ? "sidebar-open" : ""
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
        <section className="container-authentication-child">
          <h2 className="title">Scan QR code</h2>
          <p className="subtitle">Aponte a foto do seu Qr code para a câmera</p>

          <div className="reder">
            <ReaderQR onQrCodeScan={handleQrCodeScan} />
          </div>
        </section>
        <section className="container-authentication-child">
          <div className="input-container">
            <p className="guidance">Ou entre com o código manualmente</p>

            <Input
              placeholder="Ex.: 5845215"
              className="input-style"
              value={qrCodeValue}
              onChange={handleInputChange}
            />

            <div className="container-button-authentication">
              <ButtonLink>Autenticar</ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Authentication;
