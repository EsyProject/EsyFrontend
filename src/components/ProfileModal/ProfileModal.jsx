import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProfileModal.css";

const ProfileModal = ({ onClose }) => {
    const colors = ['#D543CB', '#4AB073', '#54ABA5', '#0096E8', '#7EBDFF', '#A1DFDB'];
    const [actualColor, setActualColor] = useState(colors[0]);

    useEffect(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setActualColor(randomColor);
    }, []);

    return (
        <div className="modal-profile-modal">
            <div className="modal-profile-modal-content">
                <div className="circle" style={{ backgroundColor: actualColor }}>
                    <h1>M</h1>
                </div>
                <h2>Manuela Rocha</h2>

                <div className="links">
                    <p>Configurações</p>
                    <p>Permissões</p><hr />
                    <p>Log out</p>
                </div>
                {/* nessa parte precisamos mudar para link, de modo a tornar de fato funcional */}
                {/* também é necessário arrumar a parte da posição do modal de profile 
                (será que deixar no meio realmente é bom?) */}
            </div>
        </div>
    );
};

export default ProfileModal;