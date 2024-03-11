import PropTypes from 'prop-types';
import './Input.css'; 

const Input = ({ label, id, placeholder }) => (
  <div className='custom-input'>
    <label htmlFor={id}>{label}</label>
    <input type='text' id={id} name={id} placeholder={placeholder} />
  </div>
);

// PropTypes validation for the Input component
CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
