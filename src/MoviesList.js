import React, { Component } from 'react';
import { MOVIE_BASE_PATH, MOVIE_API, MOVIE_DISCOVER } from './api';
import Movie from './Movie';

class MoviesList extends Component {
	state = {
		movies: []
	}

	async componentDidMount() {
		try {
			const res = await fetch(`${MOVIE_BASE_PATH}discover/movie?${MOVIE_API}${MOVIE_DISCOVER}`);
			const movies = await res.json();
			console.log(movies);
			this.setState({
				movies: movies.results
			})
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const { movies } = this.state;

		return (
			<React.Fragment>
				{movies.map(movie => <Movie key={movie.id} movie={movie} />)}
			</React.Fragment>
		);
	}
}

export default MoviesList;
