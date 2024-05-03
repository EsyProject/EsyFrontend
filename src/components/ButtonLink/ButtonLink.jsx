import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ButtonLink.css';

const ButtonLink = ({ to, children }) => (
  <Link to={to} className="custom-button">
    {children}
  </Link>
);

ButtonLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonLink;
