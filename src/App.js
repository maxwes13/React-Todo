import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { Typeography, Typography } from '@material-ui/core'

const tasks = [
  {
    itemName: 'Call Mom',
    id: 1528817077286,
    completed: false
  },
  {
    itemName: 'Feed Kid',
    id: 1528817084358,
    completed: false
  }

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }





clearCompleted = () => {
  this.setState({
    tasks: this.state.tasks.filter((item) => {
      return !item.completed;
    }),
  });
};




addTodo = (itemName) => {
     const newTask = {
      tasks: [
        ...this.state.tasks,
        {
          id: Date.now(),
          itemName: itemName,
          completed: false,
        },
      ],
    };

    this.setState(newTask);
  };

toggleItem = (itemId) => {
  // console.log("TodoForm: toggleItem: itemId:", itemId);
  this.setState({
    tasks: this.state.tasks.map((item) =>
      itemId === item.id ? { ...item, completed: !item.completed } : item
    ),
  });
};





  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <Typography variant="h3">All of Your Tasks</Typography>
          <TodoForm 
          tasks={this.state.tasks}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted} />
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
