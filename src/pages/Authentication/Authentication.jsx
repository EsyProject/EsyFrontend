import { useState } from "react";
import {
  Sidebar,
  Navbar,
  Input,
  ButtonLink,
  ReaderQR,
} from "../../components/index";
import { useForm } from "react-hook-form";
import "./Authentication.css";

const Authentication = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState("");

  const {
    register,
    formState: { errors },
    clearErrors,
  } = useForm();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleQrCodeScan = (value) => {
    if (!qrCodeValue) {
      console.log("QR code scanned:", value);
      setQrCodeValue(value);
    }
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
              id="qrCode"
              placeholder="Ex.: 5845215"
              register={register}
              validationRules={{ required: "Campo obrigatório" }}
              errors={errors}
              clearErrors={clearErrors}
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
