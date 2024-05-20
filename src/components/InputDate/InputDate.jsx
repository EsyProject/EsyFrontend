import PropTypes from 'prop-types';
import './InputDate.css'; 

const InputDate = ({ label, id, placeholder, register, validationRules }) => (
  <div className='custom-input'>
    <label htmlFor={id}>{label}</label>
    <input type='date' id={id} name={id} placeholder={placeholder} {...register(id, validationRules)} />
  </div>
);

// PropTypes validation for the InputDate component
InputDate.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired, // Alterado para string
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func,
  validationRules: PropTypes.object,
};

export default InputDate;
