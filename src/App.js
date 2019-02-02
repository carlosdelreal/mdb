import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	state = {
		isTextVisible: false
	}

	showHideText = () => {
		this.setState({
			isTextVisible: !this.state.isTextVisible
		});
	}

	render() {
		const {isTextVisible} = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<main>
					<Welcome
						text="This is the title"
						isTextVisible={isTextVisible}
					/>

					<button onClick={this.showHideText}>Show / Hide</button>

					{isTextVisible &&
						<p>This should show and hide</p>
					}
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
