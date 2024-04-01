import { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  ImageRegisterBack,
  LogoEsy,
  AnimatedImage,
  ButtonLink,
} from "../index";
import "./Password.css";

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [acceptPolicies, setAcceptPolicies] = useState(false);
  const [acceptEmails, setAcceptEmails] = useState(false);
  const [acceptAll, setAcceptAll] = useState(false);

  useEffect(() => {
    if (acceptAll) {
      setAcceptPolicies(true);
      setAcceptEmails(true);
    } else {
      setAcceptPolicies(false);
      setAcceptEmails(false);
    }
  }, [acceptAll]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleToggleAcceptPolicies = () => {
    setAcceptPolicies(!acceptPolicies);
  };

  const handleToggleAcceptEmails = () => {
    setAcceptEmails(!acceptEmails);
  };

  const handleToggleAcceptAll = () => {
    setAcceptAll(!acceptAll);
  };

  return (
    <>
      <div className="container-main-register">
        <AnimatedImage imageUrl={ImageRegisterBack} />

        <div className="container-register">
          <div className="logo-img">
            <img src={LogoEsy} alt="logo" />
          </div>

          <div className="form-container-password">
            <h2>Cadastre-se</h2>
            <form>
              <label htmlFor="password">Crie sua senha</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handleTogglePassword}>
                  {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </button>
              </div>

              <label htmlFor="confirmPassword">Confirme sua senha</label>
              <div className="password-input">
                <input
                  type={showPasswordConfirm ? "text" : "password"}
                  id="password"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <button type="button" onClick={handleTogglePasswordConfirm}>
                  {showPasswordConfirm ? (
                    <FiEye size={20} />
                  ) : (
                    <FiEyeOff size={20} />
                  )}
                </button>
              </div>

              <p>
                Sua senha deve ter no mínimo 8 caracteres e possuir letras,
                números e caracter especial.
              </p>

              <div className="checkboxes">
                <label>
                  <input
                    type="checkbox"
                    checked={acceptPolicies}
                    onChange={handleToggleAcceptPolicies}
                  />
                  <p>
                    Declaro que li, estou ciente e concorco com os{" "}
                    <a href="#">
                      <span>
                        Termos e Políticas de Privacidade e Segurança Esy
                      </span>
                    </a>
                    .
                  </p>
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={acceptEmails}
                    onChange={handleToggleAcceptEmails}
                  />
                  Aceito receber notificações por e-mail sobre os principais
                  eventos que estiverem ocorrendo na Bosch Campinas.
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={acceptAll}
                    onChange={handleToggleAcceptAll}
                  />
                  Aceitar tudo
                </label>
              </div>
              <ButtonLink to="/register">Cadastrar</ButtonLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
