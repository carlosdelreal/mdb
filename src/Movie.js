import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
	render() {
		const {
			movie,
			desc
		} = this.props;

		return (
			<div>
				<h3>{movie.title}</h3>
				<p>{desc}</p>
			</div>
		)
	}
}

Movie.defaultProps = {
	desc: 'Description not available'
};

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
	}),
	desc: PropTypes.string
};

export default Movie;
