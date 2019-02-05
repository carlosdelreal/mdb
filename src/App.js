import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		inputValueControlled: 'Controlled Input',
		inputValueUncontrolled: 'Uncontrolled Input'
	}

	updateInput = (event) => {
		this.setState({
			inputValue: event.target.value.trim().toLowerCase()
		});
	}

	handleSubmit = () => {
		console.log(this.text.value);
	}

	render() {
		const {
			inputValueControlled,
			inputValueUncontrolled
		} = this.state;

		return (
			<div className="App">
				<header className="App-header">
					<img
						src={logo}
						className="App-logo"
						alt="logo"
					/>
				</header>
				<main>
					<Welcome
						text="This is the title"
					/>

					<h3>{inputValueControlled}</h3>
					<input
						type="text"
						onChange={this.updateInput}
						value={inputValueControlled}
					/>

					<h3>{inputValueUncontrolled}</h3>
					<input
						type="text"
						ref={(input) => this.text = input}
					/>
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
