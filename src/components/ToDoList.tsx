import React from 'react';
import ToDoItem from './ToDoItem';
import { IToDo } from '../interfaces/ToDoInterface';

interface ToDoListProps {
    todos: IToDo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

// Компонент для відображення списку завдань
const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div>
            {todos.map(todo => (
                // Відображення окремого завдання
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default ToDoList;
