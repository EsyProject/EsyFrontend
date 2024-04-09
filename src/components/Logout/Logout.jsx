import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
    return (
        <div>
            <h1>Log out</h1>
            <p>Você está indo embora... Tem certeza?</p>
            <button>Sim, desconectar</button>
            <button>Não, quero ficar</button>
        </div>
    )
}

export default Logout;