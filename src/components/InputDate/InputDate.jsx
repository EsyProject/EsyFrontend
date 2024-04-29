import PropTypes from 'prop-types';
import './InputDate.css'; 

const InputDate = ({ label, id, placeholder }) => (
  <div className='custom-input'>
    <label htmlFor={id}>{label}</label>
    <input type='date' id={id} name={id} placeholder={placeholder} />
  </div>
);

// PropTypes validation for the Input component
InputDate.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputDate;
