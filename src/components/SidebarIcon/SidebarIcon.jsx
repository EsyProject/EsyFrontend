import PropTypes from "prop-types";
import "material-symbols";
import "../Sidebar/Sidebar.css";

const SidebarIcon = ({
  iconName,
  text,
  buttonClassName,
  className,
  textClassName,
  active,
  onClick,
}) => {
  return (
    <button
      className={`${buttonClassName} icon-${className} ${
        active ? "active" : ""
      }`}
      onClick={onClick}
    >
      <span>
        <span className="material-symbols-outlined">{iconName}</span>
        <span className={`${textClassName} ${active ? "active" : ""}`}>
          {text}
        </span>
      </span>
    </button>
  );
};

export default SidebarIcon;

SidebarIcon.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  buttonClassName: PropTypes.string,
  className: PropTypes.string,
  textClassName: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
