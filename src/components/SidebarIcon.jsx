import "./Sidebar/Sidebar.css";
import PropTypes from 'prop-types';

const SidebarIcon = ({
  icon: Icon,
  text,
  className,
  textClassName,
  active,
  onClick,
}) => {
  return (
    <button
      className={`icon-${className} ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <span>
        <Icon />
        <span
          className={`${textClassName} ${active ? "active" : ""}`}
        >
          {text}
        </span>
      </span>
    </button>
  );
};

export default SidebarIcon;

SidebarIcon.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string,
    className: PropTypes.string,
    textClassName: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
}