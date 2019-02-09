import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie}) => <h3>{movie.title}</h3>;

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired
	})
};

export default Movie;
