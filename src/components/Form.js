import React from 'react';
import '../style.css';

export default function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
	const inputTextHandler = (event) => {
		event.preventDefault();
		setInputText(event.target.value);
	};

	const submitTodoHandler = (event) => {
		event.preventDefault();
		if (inputText !== '') {
			setTodos([...todos, { text: inputText, complited: false, id: Math.random() * 1000 }]);
		} else {
			return;
		}
		setInputText('');
	};

	const statusHandler = (event) => {
		setStatus(event.target.value);
	};

	return (
		<form>
			<input value={inputText} onChange={inputTextHandler} type="text" className="form-input" />
			<button onClick={submitTodoHandler} className="todo-btn" type="submit">
				ADD
			</button>
			<div className="filter">
				<select onChange={statusHandler} name="todos" className="select filter-todos">
					<option value="all">All</option>
					<option value="complited">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
}
