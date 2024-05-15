import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.css";

import {
  InteractionRequiredAuthError,
  InteractionStatus,
} from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { callMsGraph } from "../../lib/sso/MsGraphApiCalls";
import { loginRequest } from "../../lib/sso/authConfig";

const Navbar = ({
  currentPageIcon,
  activePage,
  showNavigationTexts,
  navigationText,
  tabs,
}) => {
  const [imageUrl, setImageUrl] = useState("");

  const { instance, inProgress } = useMsal();
  const account = instance.getActiveAccount();

  useEffect(() => {
    if (!imageUrl && inProgress === InteractionStatus.None) {
      callMsGraph()
        .then((response) => {
          setImageUrl(response?.blobUrl);
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

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <section className="navbar-content-child">
          {/* Container for icon */}
          <div className="rectangle">
            <span className="material-symbols-outlined">{currentPageIcon}</span>
          </div>

          {/* Navigation text */}
          <h2>{navigationText}</h2>

          {/* Rendering of tabs */}
          {tabs &&
            tabs.length > 0 &&
            tabs.map((tab, index) => (
              <Link
                key={index}
                to={tab.link}
                className={activePage === tab.name ? "active" : ""}
              >
                {showNavigationTexts && (
                  <h4 className={activePage === tab.name ? "active" : ""}>
                    {tab.text}
                  </h4>
                )}
                {activePage === tab.name && (
                  <div className={`subtitle-underline-${tab.name}`}></div>
                )}
              </Link>
            ))}
        </section>

        <section className="navbar-content-child">
          <div className="user-data navbar-content-child">
            <h2>{account?.name}</h2>
            <div className="profile">
              <img src={imageUrl} alt="img-profile" className="img-profile" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// PropTypes for the Navbar component
Navbar.propTypes = {
  currentPageIcon: PropTypes.string.isRequired,
  activePage: PropTypes.string.isRequired,
  showNavigationTexts: PropTypes.bool.isRequired,
  navigationText: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default Navbar;
