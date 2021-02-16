import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List';

const App = () => {

	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		filterHandler();
	}, [todos, status]);

	const filterHandler = () => {
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter(el => el.completed === true));
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter(el => el.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	}

	return (
		<div className="App">
			<header>
				<h1>To-do List</h1>
			</header>
			<Form
				setInputText={setInputText}
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setStatus={setStatus}
			/>
			<List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
		</div>
	);
}

export default App;
