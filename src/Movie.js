import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
	render() {
		const {
			movie
		} = this.props;

		return (
			<div>
				<h3>{movie.title}</h3>
			</div>
		)
	}
}

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired
	})
};

export default Movie;
