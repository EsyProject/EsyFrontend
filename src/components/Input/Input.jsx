import PropTypes from 'prop-types';
import './Input.css'; 

const Input = ({ label, id, placeholder, register, validationRules }) => (
  <div className='custom-input'>
    <label htmlFor={id}>{label}</label>
    <input type='text' id={id} placeholder={placeholder} {...register(id, validationRules)} />
  </div>
);

// PropTypes validation for the Input component
Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  validationRules: PropTypes.object,
};

export default Input;
