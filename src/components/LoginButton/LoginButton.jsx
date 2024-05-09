import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../lib/sso/authConfig";

export default function LoginButton() {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup({
        ...loginRequest,
        redirectUri: '/', // e.g. /redirect
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest);
    }
  };
  return (
    <div>
      <button onClick={() => handleLogin("popup")} color="inherit">
        Login
      </button>
    </div>
  );
}
