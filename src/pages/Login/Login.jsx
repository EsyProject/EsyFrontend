import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { ImageLogin, LogoEsy, AnimatedImage, Input } from '../index';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container-main-register">
        <div className="container-register">
          <div className="logo-img-login">
            <img src={LogoEsy} alt='logo' />
          </div>
          <div className="form-container-password">
            <h2>Login</h2>
            <form>
              <Input label='E-mail' id='email' placeholder='Souza.manuela@br.bosch.com' className="input-style" />

              <label htmlFor='password'>Senha</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handleTogglePassword}>
                  {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </button>
              </div>

              <Link to="/historic" className="custom-button">Entrar</Link>
            </form>

            <div className="existing-account">
              <p>Ainda não possui uma conta? <a href="/register"><span>Cadastre-se aqui</span></a></p>
            </div>
          </div>
        </div>

        <AnimatedImage imageUrl={ImageLogin} />
      </div>
    </>
  )
}

export default Login