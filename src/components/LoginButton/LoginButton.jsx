import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../lib/sso/authConfig";
import "./LoginButton.css";

const LoginButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup({
        ...loginRequest,
        redirectUri: "/", // e.g. /redirect
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest);
    }
  };
  return (
    <div className="container-button-login">
      <button
        className="custom-button"
        onClick={() => handleLogin("popup")}
        color="inherit"
      >
        Entrar
      </button>
    </div>
  );
};

export default LoginButton;
