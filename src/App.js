import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List';

const App = () => {

	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	// Run only once
	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
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

	// Save to local storage
	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	// Get todos from local storage
	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.getItem('todos', JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem('todos'));
			console.log(todoLocal);
			setTodos(todoLocal);
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
