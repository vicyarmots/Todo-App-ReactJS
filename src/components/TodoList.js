import React from 'react';
import Todo from './Todo';
import '../style.css';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className="content">
			<ul className="todo-list">
				{filteredTodos.map((item) => {
					return <Todo value={item.text} key={item.id} todos={todos} setTodos={setTodos} todo={item} />;
				})}
			</ul>
		</div>
	);
};

export default TodoList;
