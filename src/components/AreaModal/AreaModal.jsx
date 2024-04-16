import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AreaModal.css";

const AreaModal = ({ onClose }) => {
    // imagem da area
    const dynamicImage = "src/assets/area-image.png";

    return (
        <div className="modal-area">
            <style>
                {`
                    :root {
                        --dynamic-image: url('${dynamicImage}');
                    }
                `}
            </style>
            <div className="modal-area-content">
                <div className="modal-area-content-child area-image"></div>
                <div className="modal-area-content-child area-text">
                    <h1>ETS - Engineering Technical School</h1>
                    <p>A Escola Ténica de Engenharia, mais chamada de ETS, é o setor da Bosch responsável pela <b>formação e
                        profissionalização de aprendizes</b> em vários setores desde os anos 60.</p><br />
                    <p>Forma cerca de <b>200 estudantes por ano</b> em variadas áreas, como Desenvolvimento de Software,
                        Automatização de processos, Mecatrônica, Administração, Manufatura Digital dentre outros.</p><br />
                    <p>Na planta de Campinas, o centro físico da ETS está localizado no subsolo do Ca170.</p>
                </div>
                <button className="close-button-area" onClick={onClose}>&times;</button>
            </div>
        </div>
    );
};

export default AreaModal;
