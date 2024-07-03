import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ButtonLink.css';

const ButtonLink = ({ to, children, type }) => {
  // Checks if the type is 'submit'; if so, render a button
  if (type === 'submit') {
    return (
      <button type="submit" className="custom-button">
        {children}
      </button>
    );
  }
  // Otherwise, render a Link
  return (
    <Link to={to} className="custom-button">
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['submit']),
};

export default ButtonLink;
