import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useCreateAssessment } from "../../services/mutations";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import "./EvaluationModal.css";

const EvaluationModal = ({ onClose, eventId }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
        clearErrors,
    } = useForm();
    const [highlightPoint, setHighlightPoint] = useState("");
    const [assessment, setAssessment] = useState(0);
    const createAssessmentMutation = useCreateAssessment();

    const optionMapping = {
        "Temáticas abordadas": "TOPICS_ADDRESSED",
        "Alimentação": "FOOD",
        "Pontualidade": "PUNCTUALITY",
        "Interações sociais": "SOCIAL_INTERACTIONS",
    };

    const handleOptionSelect = (option) => {
        setHighlightPoint(option === highlightPoint ? "" : option);
    };

    const handleStarClick = (starIndex) => {
        setAssessment(starIndex + 1);
        setValue('assessment', starIndex + 1);
    };

    const onSubmit = async (data) => {
        if (assessment === 0) {
            toast.error("Por favor, selecione pelo menos uma estrela.");
            return;
        }

        if (highlightPoint === "") {
            toast.error("Por favor, selecione um ponto de destaque.");
            return;
        }

        const mappedHighlightPoint = optionMapping[highlightPoint];
        const evaluationData = {
            ...data,
            highlightPoint: mappedHighlightPoint, // Single selected value
            assessment,
        };

        console.log('Dados de avaliação ao enviar:', evaluationData);

        try {
            const evaluationPromise = createAssessmentMutation.mutateAsync({
                eventId, // Access eventId from props
                ...evaluationData,
            });

            toast.promise(
                evaluationPromise,
                {
                    pending: 'Enviando avaliação...',
                    success: 'Avaliação enviada com sucesso!',
                    error: 'Erro ao enviar avaliação!'
                }
            );
            await evaluationPromise;
            reset(); // Reset form after successful submission

            // Reset stars and highlight point selection
            setAssessment(0);
            setHighlightPoint("");

            // Close modal after 5 seconds
            setTimeout(onClose, 5000);
        } catch (error) {
            console.error("Erro ao enviar avaliação:", error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <ToastContainer />
                <span className="close" onClick={onClose}>&times;</span>
                <h1>Avaliação do evento</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="modal-sub-container">
                            <h3>Nota</h3>
                            <p>Dê uma nota para o último evento que você participou</p>
                            <div className="stars">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        onClick={() => handleStarClick(index)}
                                        color={index < assessment ? "#FFCD4D" : "#DFDFE0"}
                                        size={30}
                                        style={{ cursor: "pointer" }}
                                    />
                                ))}
                            </div>

                            <h3>Pontos de destaque</h3>
                            <p>O que você mais gostou no evento?</p>
                            <div className="flags">
                                <div className="flag-container">
                                    {["Temáticas abordadas", "Interações sociais"].map(option => (
                                        <button
                                            key={option}
                                            type="button"
                                            className={`flag-option ${highlightPoint === option ? "active" : ""}`}
                                            onClick={() => handleOptionSelect(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                <div className="flag-container">
                                    {["Alimentação", "Pontualidade", "Outro"].map(option => (
                                        <button
                                            key={option}
                                            type="button"
                                            className={`flag-option ${highlightPoint === option ? "active" : ""}`}
                                            onClick={() => handleOptionSelect(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <h3>Sugestões</h3>
                            <p>Gostaria de dar alguma sugestão de melhoria (anônimo)?</p>
                            <textarea
                                className={`custom-textarea ${errors.suggestion ? "textarea-error" : ""}`}
                                placeholder="Digite aqui"
                                {...register("suggestion", {
                                    required: "Campo obrigatório",
                                })}
                                onChange={(e) => {
                                    setValue("suggestion", e.target.value);
                                    clearErrors("suggestion");
                                }}
                            ></textarea>
                            {errors.suggestion && (
                                <p className="error-message">
                                    {errors.suggestion.message}
                                </p>
                            )}
                        </div>

                        <div className="modal-sub-container">
                            <h3>Comentários</h3>
                            <p>Gostaria de compartilhar algum comentário sobre o evento ou a plataforma com os demais membros do Esy?</p>
                            <textarea
                                className={`custom-textarea ${errors.description_comment ? "textarea-error" : ""}`}
                                placeholder="Digite aqui"
                                {...register("description_comment", {
                                    required: "Campo obrigatório",
                                })}
                                onChange={(e) => {
                                    setValue("description_comment", e.target.value);
                                    clearErrors("description_comment");
                                }}
                            ></textarea>
                            {errors.description_comment && (
                                <p className="error-message">
                                    {errors.description_comment.message}
                                </p>
                            )}

                            <div className="check-container">
                                <input
                                    type="checkbox"
                                    id="isChecked"
                                    name="isChecked"
                                />

                                <label className="modal-permission" htmlFor="isChecked">
                                    Autorizo a publicação do comentário e avaliação no feed principal.
                                </label>
                            </div>

                            <div className="btn-modal-container">
                                <button className="btn-submit" type="submit">Enviar avaliação</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

EvaluationModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    eventId: PropTypes.string.isRequired,
};

export default EvaluationModal;
