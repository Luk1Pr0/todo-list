import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List';

const App = () => {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);

	return (
		<div className="App">
			<header>
				<h1>To-do List</h1>
			</header>
			<Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} />
			<List setTodos={setTodos} todos={todos} />
		</div>
	);
}

export default App;
