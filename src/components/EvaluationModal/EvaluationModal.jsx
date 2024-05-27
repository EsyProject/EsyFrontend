import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useCreateAssessment } from "../../services/mutations";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from "../../components/index";
import "./EvaluationModal.css";

const EvaluationModal = ({ onClose, eventId }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset,
        clearErrors,
    } = useForm();
    const [highlightPoint, setHighlightPoint] = useState([]);
    const [assessment, setAssessment] = useState(0);
    const createAssessmentMutation = useCreateAssessment();

    const handleOptionSelect = (option) => {
        setHighlightPoint(prev =>
            prev.includes(option)
                ? prev.filter(highlightPoint => highlightPoint !== option)
                : [...prev, option]
        );
    };

    const handleStarClick = (starIndex) => {
        setAssessment(starIndex + 1);
        setValue('assessment', starIndex + 1);
    };

    const onSubmit = async (data) => {
        const evaluationData = {
            ...data,
            highlightPoint,
            assessment,
        };
    
        console.log('Dados de avaliação ao enviar:', evaluationData);
    
        try {
            const evaluationPromise = createAssessmentMutation.mutateAsync({
                eventId: eventId, // Access eventId from props
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
            onClose(); // Close the modal after successful submission
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
                                            className={`flag-option ${highlightPoint.includes(option) ? "active" : ""}`}
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
                                            className={`flag-option ${highlightPoint.includes(option) ? "active" : ""}`}
                                            onClick={() => handleOptionSelect(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <h3>Sugestões</h3>
                            <p>Gostaria de dar alguma sugestão de melhoria (anônimo)?</p>
                            <Input
                                label="Sugestões"
                                id="suggestion"
                                placeholder="Digite aqui"
                                register={register}
                                validationRules={{ required: "Campo obrigatório" }}
                                errors={errors}
                                clearErrors={clearErrors}
                            />
                        </div>

                        <div className="modal-sub-container">
                            <h3>Comentários</h3>
                            <p>Gostaria de compartilhar algum comentário sobre o evento ou a plataforma com os demais membros do Esy?</p>

                            <Input
                                label="Comentários"
                                id="description_comment"
                                placeholder="Digite aqui"
                                register={register}
                                validationRules={{ required: "Campo obrigatório" }}
                                errors={errors}
                                clearErrors={clearErrors}
                            />

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

export default EvaluationModal;
