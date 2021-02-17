import React from 'react';

const Todo = ({ value, todos, setTodos, todo }) => {
	const deleteHandler = () => {
		setTodos(todos.filter((item) => item.id !== todo.id));
	};

	const compliteHandler = () => {
		setTodos(
			todos.map((item) => {
				return item.id === todo.id ? { ...item, complited: !item.complited } : item;
			})
		);
	};

	return (
		<div className="todo">
			<li className={`todo-item ${todo.complited ? 'complited' : ''}`}>{value}</li>
			<button onClick={compliteHandler} className="check">
				Check
			</button>
			<button onClick={deleteHandler} className="delete">
				Delete
			</button>
		</div>
	);
};

export default Todo;
