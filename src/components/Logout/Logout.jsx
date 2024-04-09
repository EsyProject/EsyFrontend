import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Logout.css";

const Logout = ({ onClose }) => {
    return (
        <div className="modal-logout">
            <div className="modal-logout-content">
                <h1>Log out</h1>
                <p>Você está indo embora... Tem certeza?</p>

                <div className="button-container">
                    <button className="exit-button">Sim, desconectar</button>
                    <button className="custom-button" onClick={onClose}>Não, quero ficar</button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
