import "./Sidebar/Sidebar.css";
import PropTypes from "prop-types";
import "material-symbols";

const SidebarIcon = ({
  iconName,
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
  className: PropTypes.string,
  textClassName: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
