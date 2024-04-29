import PropTypes from 'prop-types';
import './InputHour.css'; 

const InputHour = ({ label, id, placeholder }) => (
  <div className='custom-input'>
    <label htmlFor={id}>{label}</label>
    <input type='time' id={id} name={id} placeholder={placeholder} />
  </div>
);

// PropTypes validation for the Input component
InputHour.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputHour;
