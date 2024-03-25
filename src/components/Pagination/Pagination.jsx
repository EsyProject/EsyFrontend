import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ limit, total, offset, setOffset }) => {
  const MAX_ITEMS = 9; // Maximum items displayed in pagination
  const MAX_LEFT = (MAX_ITEMS - 1) / 2; // Maximum items to the left of the current item

  // Calculation of the current page
  const current = offset ? offset / limit + 1 : 1;

  // Calculation of the total number of pages
  const pages = Math.ceil(total / limit);

  // Calculation of the index of the first item to be displayed in the page
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

  // Function to handle page change
  const onPageChange = (page) => {
    setOffset((page - 1) * limit);
  };

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          Anterior
        </button>
      </li>
      {Array.from(
        { length: Math.min(MAX_ITEMS, pages) },
        (_, index) => index + first
      ).map((page) => (
        <li key={page}>
          <button
            onClick={() => onPageChange(page)}
            className={page === current ? "pagination__item--active" : ""}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Próxima
        </button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  setOffset: PropTypes.func.isRequired,
};

export default Pagination;
