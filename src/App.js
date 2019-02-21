import React, { Component } from 'react';
import TodoListTemaplate    from './components/TodoListTemplate';
import Form                 from'./components/Form';
import TodoItemList         from "./components/TodoItemList";
import Palette              from "./components/Palette";

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6']

class App extends Component {
  id = 3

  state = {
    input: '',
    todos: [
      {id: 0, text: 'react 1', checked: false},
      {id: 1, text: 'react 2', checked: true},
      {id: 2, text: 'react 3', checked: false},
    ],
    color:'#343a40'
  }

  handleChange = (e) => {
    console.log('app - change')
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () => {
    const {input, todos, color} = this.state
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: color
      }),

    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate()
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state

    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index]
    const nextTodos = [...todos]

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const {todos} = this.state

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  handleSelectorColor = (color) => {
    this.setState({
      color: color
    })
  }

  render() {
    const {input, todos, color} = this.state
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectorColor,
    } = this

    // console.log('app')
    return (
      <TodoListTemaplate form={(
          <Form
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
              color={color}
          />
      )}
      palette={(
          <Palette colors={colors} selected={color} onSelect={handleSelectorColor}/>
      )}
      >

        <TodoItemList color={color} todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemaplate>
    )
  }
}

export default App;
