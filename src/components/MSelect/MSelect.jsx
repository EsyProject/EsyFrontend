import { useState } from "react";
import PropTypes from "prop-types";
import "material-symbols";
import "./MSelect.css";

const MSelect = ({ options, placeholder, value, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    console.log("Opção selecionada:", option);
    setSelectedOption(option);
    onChange(option);
    setShowOptions(false);
  };

  return (
    <div className="mselect-container">
      <div className="filter-searchbar">
        <div className="select-wrapper">
          <span className="material-symbols-outlined">calendar_month</span>
          <h4>{selectedOption ? selectedOption.label : placeholder}</h4>
          {showOptions && (
            <div className="options-modal">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${option.value === selectedOption.value ? 'selected' : ''}`}
                  onClick={() => handleOptionClick(option)}
                >
                  <span className="material-symbols-outlined">{option.value === selectedOption.value ? 'check' : ''}</span>
                  {option.label}
                </div>
              ))}
            </div>
          )}
          <span className="material-symbols-outlined" onClick={toggleOptions}>
            expand_more
          </span>
        </div>
      </div>
    </div>
  );
};

MSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default MSelect;
