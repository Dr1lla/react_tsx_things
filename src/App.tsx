import React, { useState, useEffect } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { IToDo } from './interfaces/ToDoInterface';

// Головний компонент додатку
const App: React.FC = () => {
    // Використання хука useState для зберігання списку завдань
    const [todos, setTodos] = useState<IToDo[]>([]);

    // Функція для додавання нового завдання до списку
    const addTodo = (text: string) => {
        const newTodo: IToDo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    // Функція для перемикання стану виконання завдання
    const toggleTodo = (id: number) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    // Функція для видалення завдання зі списку
    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            {/* Форма для додавання нового завдання */}
            <ToDoForm addTodo={addTodo} />
            {/* Список завдань */}
            <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
