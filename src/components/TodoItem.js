import React from 'react'

const TodoItem = ({ text, todos, todo, setTodos }) => {

	const deleteHandler = () => {
		const filtered = todos.filter(el => el.id !== todo.id);
		setTodos(filtered);
	}

	const completeHandler = () => {
		setTodos(todos.map(el => {
			if (el.id === todo.id) {
				return { ...el, completed: !el.completed }
			}
			else {
				return el;
			}
		}))
	}

	return (
		<div className='todo'>
			<li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
			<button className='complete-btn' onClick={completeHandler}><i className='fas fa-check'></i></button>
			<button className='trash-btn' onClick={deleteHandler}><i className='fas fa-trash'></i></button>
		</div >
	)
}

export default TodoItem;
