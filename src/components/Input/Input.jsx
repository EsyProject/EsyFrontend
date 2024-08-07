import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ label, id, placeholder, register, validationRules, value, onChange, type = 'text', accept, errors, clearErrors }) => (
  <div className={`custom-input ${errors[id] && "input-error"}`}>
    <label htmlFor={id}>{label}</label>
    {register ? (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, validationRules)}
        onChange={(event) => {
          onChange && onChange(event); 
          if (clearErrors) {
            clearErrors(id); 
          }
        }}
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

    <p className="error-message">
      {errors[id] && errors[id].message}
    </p>
  </div>
);

// PropTypes validation for the Input component
Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  validationRules: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  accept: PropTypes.string,
  errors: PropTypes.object,
  clearErrors: PropTypes.func
};

export default Input;
