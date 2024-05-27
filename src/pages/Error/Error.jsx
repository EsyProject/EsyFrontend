import React from 'react';
import "./Error.css";
import bike from "../../assets/images-general/woman-in-bike.png"
import logotype from "../../assets/images-general/logotype-dark.png"

const Error = () => {
  return (
    <div className="error-container-main">
        <img src={logotype} alt="woman in bike"/>
        <h1 className="error-code">404</h1>
        <p className="error-status">Página não encontrada</p>
        <p className="error-request-message">Acho que essa não é a página que você está procurando</p>
        <img src={bike} alt="woman in bike" className="bike-img"/>
    </div>
  )
}

export default Error;