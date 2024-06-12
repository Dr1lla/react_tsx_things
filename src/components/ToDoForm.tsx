import React, { useState } from 'react';

interface ToDoFormProps {
    addTodo: (text: string) => void;
}

// Компонент форми для додавання нового завдання
const ToDoForm: React.FC<ToDoFormProps> = ({ addTodo }) => {
    // Використання хука useState для зберігання тексту нового завдання
    const [value, setValue] = useState<string>('');

    // Функція обробки події відправки форми
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value); // Виклик функції додавання завдання з переданим текстом
        setValue(''); // Очистка поля введення після додавання завдання
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)} // Оновлення тексту завдання при введенні
    />
    <button type="submit">Add</button>
        </form>
);
};

export default ToDoForm;
