import React, { Component } from 'react';
import './App.css';

import api from './api';

import Movie from './Movie';

class App extends Component {

	state = {
		movies: []
	}

	async componentDidMount() {
		try {
			const res = await fetch(api);
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
		const {movies} = this.state;

		return (
			<div className="App">
				<header className="App-header">
					<h1>&lt; MDB &gt;</h1>
				</header>
				{movies.map(movie => <Movie key={movie.id} movie={movie} />)}
			</div>
		);
	}
}

export default App;
