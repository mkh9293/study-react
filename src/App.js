import React, { Component } from 'react';
import TodoListTemaplate from './components/TodoListTemplate';
import Form from'./components/Form';

class App extends Component {
  render() {
    return (
      <TodoListTemaplate form={<Form/>}>
        todo list template
      </TodoListTemaplate>
    );
  }
}

export default App;
