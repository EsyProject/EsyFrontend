import { useState } from "react";
import "material-symbols";
import "./MSelect.css";

const MSelect = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    console.log("Opção selecionada:", option);
    setShowOptions(false); // close the modal
  };

  return (
    <div className="mselect-container">
      <div className="filter-searchbar">
        <div className="select-wrapper">
          <span className="material-symbols-outlined">
            <span className="material-symbols-outlined" onClick={toggleOptions}>
              expand_more
            </span>
          </span>
          <h4>Todo o período</h4>
          {showOptions && (
            <div className="options-modal">
              <div
                className="option"
                onClick={() => handleOptionClick("Todo o período")}
              >
                Todo o período
              </div>
              <div
                className="option"
                onClick={() => handleOptionClick("Último mês")}
              >
                Último mês
              </div>
              <div
                className="option"
                onClick={() => handleOptionClick("Últimos 3 meses")}
              >
                Últimos 3 meses
              </div>
              <div
                className="option"
                onClick={() => handleOptionClick("Últimos 6 meses")}
              >
                Últimos 6 meses
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MSelect;
