import { ImageLogin, LogoEsy } from "../index";
import { AnimatedImage } from "../../components/index";
import "./LoginSSO.css";
import LoginButton from "../../components/LoginButton/LoginButton";

const LoginSSO = () => {
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
            {/* <ButtonLink to="/historic">Entrar</ButtonLink> */}
            
            <div className="existing-account">
              <p>Sua criação de eventos tão simples quanto um <a href="/register"><span>clique</span></a></p>
            </div>
          </div>
        </div>

        <AnimatedImage imageUrl={ImageLogin} />
      </div>
    </>
  );
};

export default LoginSSO;
