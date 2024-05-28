import React from 'react';
import "./Error.css";
import { InteractiveBubble } from '../../components';
import bike from "../../assets/images-general/woman-in-bike.png"
import logotype from "../../assets/images-general/logotype-dark.png"

const Error = () => {
  return (
    <div className="error-container-main">


      <div className="gradient-bg">
        <img src={logotype} alt="logotype of esy system" className="local-logotype" />
        <div className="error-content">
          <h1 className="error-code">404</h1>
          <p className="error-status">Página não encontrada</p>
          <p className="error-request-message">Acho que essa não é a página <br></br> que você está procurando</p>
        </div>
        <img src={bike} alt="woman in bike" className="bike-img" />

        <div class="container-bubbles">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
        </div>


        <div className="image-register-animated">
          <div className="gradients-container">
            <div className="bubble1"></div>
            <div className="bubble2"></div>
            {/* <div className="bubble3"></div> */}
            <div className="bubble4"></div>
            <InteractiveBubble />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Error;