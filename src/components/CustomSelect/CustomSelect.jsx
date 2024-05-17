import PropTypes from "prop-types";
import Select from "react-select";
import "./CustomSelect.css";

// Custom styles for the Select component
const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #BDC1C6",
    borderRadius: "7px",
    height: "50px",
    width: "auto",
    paddingBottom: "0px",
    paddingTop: "0px",
    paddingLeft: "20px",
    paddingRight: "0px",
    margin: "0px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9AA0A6",
  }),
};

// Custom Select component
const CustomSelect = ({
  label,
  id,
  options,
  placeholder,
  onChange,
}) => (
  <div className="custom-select">
    <label htmlFor={id}>{label}</label>
    <Select
      id={id}
      options={options}
      placeholder={placeholder}
      styles={customStyles}
      classNamePrefix="custom-select"
      className="custom-select-css-w9q2zk-Input2"
      onChange={(selectedOption) => {
        onChange(selectedOption.value);
      }}
    />
  </div>
);

// PropTypes validation for the CustomSelect component
CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
