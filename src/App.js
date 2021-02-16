import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List';

const App = () => {
	const [inputText, setInputText] = useState('');

	console.log(inputText);

	return (
		<div className="App">
			<header>
				<h1>To-do List</h1>
			</header>
			<Form setInputText={setInputText} />
			<List />
		</div>
	);
}

export default App;
