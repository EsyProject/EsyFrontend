import PropTypes from 'prop-types';
import './Input.css'; 

const Input = ({ label, id, placeholder, value, onChange }) => (
  <div className='custom-input'>
    <label htmlFor={id}>{label}</label>
    <input type='text' id={id} name={id} placeholder={placeholder} value={value} onChange={onChange} />
  </div>
);

// PropTypes validation for the Input component
Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
