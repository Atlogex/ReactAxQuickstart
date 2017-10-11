var React = require('react');
// import React from 'react';

const getMessage = () => "Hello World"; // ES6!
console.log(getMessage());

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Header</h1>
				<h2>Content</h2>
				<p>This is the content!!!</p>
			</div>
		);
	}
}

export default App;