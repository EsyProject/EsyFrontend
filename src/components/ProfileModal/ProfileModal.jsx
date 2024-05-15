import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useMsal } from "@azure/msal-react";
import { Link } from "react-router-dom";
import { PreloaderImage } from "../../components/index";
import { Loading } from "../../pages/index";
import "./ProfileModal.css";

import {
  InteractionRequiredAuthError,
  InteractionStatus,
} from "@azure/msal-browser";
import { callMsGraph } from "../../lib/sso/MsGraphApiCalls";
import { loginRequest } from "../../lib/sso/authConfig";

const ProfileModal = ({ onClose }) => {
  const modalRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const { instance, inProgress } = useMsal();
  const account = instance.getActiveAccount();

  const handleLogout = (logoutType) => {
    if (logoutType === "popup") {
      instance.logoutPopup();
    } else if (logoutType === "redirect") {
      instance.logoutRedirect();
    }
  };

  useEffect(() => {
    if (!imageUrl && inProgress === InteractionStatus.None) {
      callMsGraph()
        .then((response) => {
          setImageUrl(response?.blobUrl);
          setLoading(false);
        })
        .catch((e) => {
          if (e instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect({
              ...loginRequest,
              account: instance.getActiveAccount(),
            });
          }
        });
    }
  }, [inProgress, instance, imageUrl, account?.name]);

  useEffect(() => {
    // event listener to capture clicks outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-profile-modal">
      <div ref={modalRef} className="modal-profile-modal-content">
        {loading ? (
          <PreloaderImage src={Loading} alt="Loading..." />
        ) : (
          <div className="circle">
            <img src={imageUrl} alt="img-profile" className="img-profile" />
          </div>
        )}
        <h2>
          {account?.name && account.name.split(" ").slice(0, 2).join(" ")}
        </h2>

        <div className="links">
          <Link to="/settings">Configurações</Link>
          <hr />
          <button onClick={() => handleLogout("popup")} color="inherit">
            <p>Log out</p>
          </button>
        </div>
      </div>
    </div>
  );
};

ProfileModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProfileModal;
