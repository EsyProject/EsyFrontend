import PropTypes from 'prop-types';
import Select from 'react-select';
import './CustomSelect.css';

// Custom styles for the Select component
const customStyles = {
  control: (provided) => ({
    ...provided,
    border: '1px solid #BDC1C6',
    borderRadius: '7px',
    height: '50px',
    width: 'auto',
    paddingBottom: '0px',
    paddingTop: '0px',
    paddingLeft: '20px',
    paddingRight: '0px',
    margin: '0px',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#9AA0A6',
  }),
};

// Custom Select component
const CustomSelect = ({ options, placeholder, label }) => (
  <div className="custom-select">
    <label>{label}</label>
    <Select
      options={options}
      placeholder={placeholder}
      styles={customStyles}
      classNamePrefix="custom-select"
      className="custom-select-css-w9q2zk-Input2"
    />
  </div>
);

// PropTypes validation for the CustomSelect component
CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomSelect;
