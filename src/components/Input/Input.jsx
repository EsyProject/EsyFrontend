import PropTypes from 'prop-types';
import './Input.css'; 

const Input = ({ label, id, placeholder, register, validationRules, value, onChange, type = 'text', accept }) => (
  <div className='custom-input'>
    <label htmlFor={id}>{label}</label>
    {register ? (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, validationRules)}
        onChange={onChange}
        accept={accept}
      />
    ) : (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        accept={accept}
      />
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
  type: PropTypes.string,
  accept: PropTypes.string,
};

export default Input;
