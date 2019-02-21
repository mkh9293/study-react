import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children, palette}) => {
    console.log('listTemplate')
    return (
        <main className="todo-list-template">
            <div className="title">
                todo-list
            </div>
            <section className="form-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate;