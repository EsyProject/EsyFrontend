import PropTypes from 'prop-types';
import './InputHour.css'; 

const InputHour = ({ label, id, placeholder, register, validationRules }) => (
  <div className='custom-input'>
    <label htmlFor={id}>{label}</label>
    <input type='time' id={id} placeholder={placeholder} {...register(id, validationRules)} />
  </div>
);

// PropTypes validation for the Input component
InputHour.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func,
  validationRules: PropTypes.object,
};

export default InputHour;
