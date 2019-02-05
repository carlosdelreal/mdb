import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	handleSubmit = () => {
		console.log(this.text.value);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<main>
					<Welcome
						text="This is the title"
					/>
					<input type="text" ref={(input) => this.text = input}/>
					<button onClick={this.handleSubmit}>Show Value</button>
				</main>
			</div>
		);
	}
}

class Welcome extends Component {
	render() {
		const {text, isTextVisible} = this.props;
		console.log(isTextVisible);

		return (
			<h1 className="App-title">{text}</h1>
		);
	}
}

export default App;
