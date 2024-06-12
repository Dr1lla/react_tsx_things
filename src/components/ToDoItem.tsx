import React from 'react';
import { IToDo } from '../interfaces/ToDoInterface';

interface ToDoItemProps {
    todo: IToDo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

// Компонент для відображення окремого завдання
const ToDoItem: React.FC<ToDoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <div>
            {/* Текст завдання з можливістю відмітки виконання */}
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : '' }}
                onClick={() => toggleTodo(todo.id)} // Виклик функції перемикання стану виконання завдання
            >
        {todo.text}
      </span>
            {/* Кнопка для видалення завдання */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
};

export default ToDoItem;
