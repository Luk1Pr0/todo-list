import React from 'react';
import TodoItem from './TodoItem';

const List = ({ todos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map(todo => <TodoItem key={todo.id} text={todo.text} />)}
			</ul>
		</div>
	)
}

export default List;
