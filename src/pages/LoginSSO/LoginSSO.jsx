import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import { ImageLogin, LogoEsy } from "../index"; 
import { AnimatedImage, LoginButton } from "../../components/index";
import "./LoginSSO.css";

const LoginSSO = () => {
  const { accounts, inProgress } = useMsal();
  const navigate = useNavigate();
 
  useEffect(() => {
    if (accounts[0] && inProgress == "none") {
      navigate("/");
    }
  }, [accounts, inProgress, navigate]);

  return (
    <>
      <div className="container-main-register">
        <div className="container-register">
          <div className="logo-img-login">
            <img src={LogoEsy} alt="logo" />
          </div>
          <div className="container-login">
            <h2>Login</h2>

            <p className='subtitle-login'>Transforme a organização de eventos em uma experiência esy!</p>

            <LoginButton />
            
            <div className="existing-account">
              <p>Sua criação de eventos tão simples quanto um <a href="/"><span>clique</span></a></p>
            </div>
          </div>
        </div>

        <AnimatedImage imageUrl={ImageLogin} />
      </div>
    </>
  );
};

export default LoginSSO;
