import PropTypes from 'prop-types';
import './Input.css'; 

const Input = ({ label, id, placeholder, register, validationRules, value, onChange }) => (
  <div className='custom-input'>
    <label htmlFor={id}>{label}</label>
    {register ? (
      <input type='text' id={id} placeholder={placeholder} {...register(id, validationRules)} />
    ) : (
      <input type='text' id={id} placeholder={placeholder} value={value} onChange={onChange} />
    )}
  </div>
);

// PropTypes validation for the Input component
Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  validationRules: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;