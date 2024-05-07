import { useState, useEffect } from "react";
import "./EvaluationModal.css";

import { FaStar } from "react-icons/fa";


const EvaluationModal = ({ onClose }) => {
    // flags of modal
    function toggleActive(button) {
        button.classList.toggle("active");
    }

    const buttons = document.querySelectorAll(".flag");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            toggleActive(button);
        });
    });

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionSelect = (option) => {
        const isSelected = selectedOptions.includes(option);
        if (isSelected) {
            setSelectedOptions(
                selectedOptions.filter((selectedOption) => selectedOption !== option)
            );
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    // checkbox modal
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // starts color select
    const [rating, setRating] = useState(0);

    const handleStarClick = (starIndex) => {
        setRating(starIndex + 1);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h1>Avaliação do evento</h1>

                <div className="row">
                    <div className="modal-sub-container">
                        <h3>Nota</h3>
                        <p>Dê uma nota para o último evento que você participou</p>
                        <div className="stars">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    onClick={() => handleStarClick(index)}
                                    color={index < rating ? "#FFCD4D" : "#DFDFE0"} // Pinta as estrelas até a classificação atual
                                    size={30}
                                    style={{ cursor: "pointer" }}
                                />
                            ))}
                        </div>

                        <h3>Pontos de destaque</h3>
                        <p>O que você mais gostou no evento?</p>
                        <div className="flags">
                            <div className="flag-container">
                                {["Temáticas abordadas", "Interações sociais"].map(
                                    (option) => (
                                        <button
                                            key={option}
                                            className={`flag-option ${selectedOptions.includes(option) ? "active" : ""
                                                }`}
                                            onClick={() => handleOptionSelect(option)}
                                        >
                                            {option}
                                        </button>
                                    )
                                )}
                            </div>
                            <div className="flag-container">
                                {["Alimentação", "Pontualidade", "Outro"].map(
                                    (option) => (
                                        <button
                                            key={option}
                                            className={`flag-option ${selectedOptions.includes(option) ? "active" : ""
                                                }`}
                                            onClick={() => handleOptionSelect(option)}
                                        >
                                            {option}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>

                        <h3>Sugestões</h3>
                        <p>Gostaria de dar alguma sugestão de melhoria (anônimo)?</p>
                        <textarea
                            className="custom-textarea"
                            placeholder="Digite aqui"
                        ></textarea>
                    </div>

                    <div className="modal-sub-container">
                        <h3>Comentários</h3>
                        <p>
                            Gostaria de compartilhar algum comentário sobre o evento ou
                            a plataforma com os demais membros do Esy?
                        </p>
                        <textarea
                            className="custom-textarea"
                            placeholder="Digite aqui"
                        ></textarea>

                        <div className="check-container">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label className="modal-permission">
                                Autorizo a publicação do comentário e avaliação no feed
                                principal.
                            </label>
                        </div>

                        <div className="btn-modal-container">
                            <button className="btn-submit">Enviar avaliação</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvaluationModal;
