import React, { Component } from 'react'
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.todos !== nextProps.todos
    }

    render() {
        // console.log('itemlist')
        const { todos, onToggle, onRemove, color } = this.props
        console.log(color)
        const todoList = todos.map(
            (todo) => (
                <TodoItem
                    {...todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                    color={color}
                />
            )
        )

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList