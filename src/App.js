import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'





class App extends React.Component {
constructor() {
  super();
  this.state = {
    tasks: ""
    
  };
}



clearCompleted = () => {
  this.state({
    tasks: this.state.tasks.filter((item) => {
      return !item.completed;
    }),
  });
};




addTodo = (itemName) => {
  itemName.preventDefault();
  this.setState({
    tasks: [
      ...this.state.tasks,
      { id: Date.now(), name: itemName, completed: false },
    ],
  });
};



toggleItem = (itemId) => {
  this.setState({
    tasks: this.state.tasks.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  });
};


handleChanges = (e) => {
  this.setState({
    tasks: e.target.value
  });
};



handleSubmit = (e) => {
  e.preventDefault();
  this.addTodo(this.state.tasks);
};



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>All of Your Tasks</h2>
          <TodoForm 
          addTodo={this.addTodo} />
        </div>
          <TodoList 
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
