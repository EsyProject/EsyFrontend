import PropTypes from "prop-types";
import "material-symbols";
import "./Searchbar.css";

// Searchbar component definition
const Searchbar = ({ setSearch }) => {
  // JSX rendering of Searchbar component
  return (
    <div className="container-search">
      <div className="input-wrapper">
        <span className="material-symbols-outlined">search</span>
        <input
          type="search"
          placeholder="Pesquise aqui..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

Searchbar.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Searchbar;
