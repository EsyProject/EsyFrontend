import { useMsal } from "@azure/msal-react";

export default function LogoutButton() {
  const { instance } = useMsal();

  const handleLogout = (logoutType) => {
    if (logoutType === "popup") {
      instance.logoutPopup();
    } else if (logoutType === "redirect") {
      instance.logoutRedirect();
    }
  };
  return (
    <div>
      <button onClick={() => handleLogout("popup")} color="inherit">
        Login
      </button>
    </div>
  );
}
