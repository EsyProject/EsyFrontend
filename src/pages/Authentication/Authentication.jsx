import { useState } from "react";
import {
  Sidebar,
  Navbar,
  Input,
  ButtonLink,
  ReaderQR,
} from "../../components/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { useConfirmTicket } from "../../services/mutations";
import beepSound from "../../assets/sounds/beep.mp3";
import "./Authentication.css";

const Authentication = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const confirmTicketMutation = useConfirmTicket();

  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleQrCodeScan = async (qrCode) => {
    if (isProcessing) return; // Return early if already processing a QR code
    if (!qrCodeValue) {
      console.log("QR code scanned:", qrCode);
      setQrCodeValue(qrCode);
      setIsProcessing(true);
  
      // Play the beep sound
      const audio = new Audio(beepSound);
      audio.play();
  
      await handleAuthentication(qrCode);

      // Reset the QR code value after a short delay
      setTimeout(() => {
        setQrCodeValue("");
        setIsProcessing(false);
      }, 1000); // Adjust the delay as needed
    }
  };
  
  const handleManualInsertion = async (data) => {
    if (isProcessing) return; // Return early if already processing a QR code
    const qrCode = data.qrCode;
    console.log("Manual QR code insertion:", qrCode);
    setIsProcessing(true);

    // Play the beep sound
    const audio = new Audio(beepSound);
    audio.play();
  
    await handleAuthentication(qrCode);

    // Reset the QR code value after a short delay
    setTimeout(() => {
      setQrCodeValue("");
      setIsProcessing(false);
    }, 1000);
  };
  
  const handleAuthentication = async (qrCode) => {
    const [randomNumber, eventId, ticketId] = qrCode.split('.');

    try {
      // Perform ticket authentication
      const confirmationResult = await confirmTicketMutation.mutateAsync({ eventId, ticketId });

      console.log("Ticket confirmed successfully:", confirmationResult);
      setQrCodeValue(""); // Resets the QR code value after successful authentication
    } catch (error) {
      console.error("Erro ao autenticar o ticket:", error);
    }

    console.log("Random Number:", randomNumber);
    console.log("Event id:", eventId);
    console.log("Ticket id:", ticketId);
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
        <ToastContainer />
        <section className="container-authentication-child">
          <h2 className="title">Scan QR code</h2>
          <p className="subtitle">Aponte a foto do seu Qr code para a câmera</p>

          <div className="reder">
            <ReaderQR onQrCodeScan={handleQrCodeScan} />
          </div>
        </section>
        <section className="container-authentication-child">
          <form onSubmit={handleSubmit(handleManualInsertion)}>
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
                <ButtonLink type="submit">Autenticar</ButtonLink>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Authentication;
