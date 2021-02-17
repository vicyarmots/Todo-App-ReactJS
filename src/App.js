import React, { useState, useEffect } from 'react';

import TodoList from './components/TodoList';
import Form from './components/Form';
import './style.css';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		filterHandler();
	}, [todos, status]);

	const filterHandler = () => {
		switch (status) {
			case 'complited':
				setFilteredTodos(todos.filter((item) => item.complited));
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter((item) => !item.complited));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	return (
		<div className="App">
			<header>
				<h1>Server API</h1>
				<div></div>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setStatus={setStatus}
			/>
			<TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
		</div>
	);
}

export default App;
