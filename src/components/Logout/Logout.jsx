import PropTypes from "prop-types";
import { useMsal } from "@azure/msal-react";
import "./Logout.css";

const Logout = ({ onClose }) => {
  const { instance } = useMsal();

  const handleLogout = (logoutType) => {
    if (logoutType === "popup") {
      instance.logoutPopup();
    } else if (logoutType === "redirect") {
      instance.logoutRedirect();
    }
  };

  return (
    <div className="modal-logout">
      <div className="modal-logout-content">
        <h1>Log out</h1>
        <p>Você está indo embora... Tem certeza?</p>

        <div className="button-container">
          <button className="exit-button" onClick={() => handleLogout("popup")} color="inherit">Sim, desconectar</button>
          <button className="custom-button" onClick={onClose}>
            Não, quero ficar
          </button>
        </div>
      </div>
    </div>
  );
};

Logout.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Logout;
