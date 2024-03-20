import React, { useEffect } from 'react';
import { ImageRegisterBack, LogoEsy, AnimatedImage, Input, CustomSelect } from '../index';
import { Link } from 'react-router-dom';
import './Register.css';

const options = [
  { value: '', label: 'Selecione' },
  { value: 'option1', label: 'ETS' },
  { value: 'option2', label: 'Bisb' },
  { value: 'option3', label: 'BD' },
];

const Register = () => {
  useEffect(() => {
    const input2 = document.querySelector('.css-w9q2zk-Input2');
    const valueContainer2 = document.querySelector('.css-art2ul-ValueContainer2');

    if (input2) {
      input2.style.margin = '0';
      input2.style.padding = '0px';
    }

    if (valueContainer2) {
      valueContainer2.style.padding = '0';
    }
  }, []);

  return (
    <>
      <div className="container-main-register">
        <AnimatedImage imageUrl={ImageRegisterBack} />

        <div className="container-register">
          <div className="logo-img">
            <img src={LogoEsy} alt='logo' />
          </div>
          <div className="form-container">
            <h2>Cadastre-se</h2>
            <form>
              <Input label="Nome completo" id="fullName" placeholder="Ex.: Manuela Rocha" />
              <Input label="E-mail" id="email" placeholder="Souza.manuela@br.bosch.com" />
              <CustomSelect label="Setor" options={options} placeholder="Selecione" className="custom-select-css-w9q2zk-Input2" />

              <Link to="/password" className="custom-button">Prosseguir</Link>
            </form>

            <div className="existing-account">
              <p>Já possui uma conta? <a href="/login"><span>Entrar</span></a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register