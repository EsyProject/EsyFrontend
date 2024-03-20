import PropTypes from 'prop-types';
import './Input.css'; 

const Input = ({ label, id, placeholder }) => (
  <div className='custom-input'>
    <label htmlFor={id}>{label}</label>
    <input type='text' id={id} name={id} placeholder={placeholder} />
  </div>
);

// PropTypes validation for the Input component
Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
