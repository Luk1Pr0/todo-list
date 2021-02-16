import React from 'react';
import TodoItem from './TodoItem';

const List = ({ setTodos, todos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map(todo => <TodoItem key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo} />)}
			</ul>
		</div>
	)
}

export default List;
