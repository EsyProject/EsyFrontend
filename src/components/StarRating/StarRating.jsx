import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  const stars = [];

  // Renders stars based on the given rating
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i} className="material-symbols-rounded">grade</span>);
  }

  return (
    <div className="stars">
      {stars}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
