import PropTypes from 'prop-types';
import './CustomSelect.css';

const CustomSelect = ({
  label,
  id,
  options,
  register,
  validationRules,
  errors,
  clearErrors,
}) => {

  const handleSelectChange = () => {
    clearErrors(id);
  };

  return (
    <div className="custom-select">
      <label htmlFor={id}>{label}</label>
      <div className={`select-container ${errors[id] && "select-error"}`}>
        <select
          id={id}
          onChange={handleSelectChange}
          {...register(id, validationRules)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {errors[id] && <p className="error-message">{errors[id].message}</p>}
    </div>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array,
  register: PropTypes.func,
  validationRules: PropTypes.object,
  errors: PropTypes.object,
  clearErrors: PropTypes.func,
};

export default CustomSelect;
