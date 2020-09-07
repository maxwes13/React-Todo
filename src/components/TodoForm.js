import React from 'react';
import { TextField, Button } from '@material-ui/core';



class TodoForm extends React.Component {
    state = {
      itemName: "",
    };

    handleChanges = (e) => {
        this.setState({ 
            itemName: e.target.value,
      });
    };
    
    
    submitForm = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.itemName);
        this.setState({
          itemName: "",
        });
      };
    
      render() {
        return (
          <form>
            <TextField
              type="text"
              name="itemName"
              value={this.state.itemName}
              placeholder="Add a new task?"
              onChange={this.handleChanges}
            />
            
            <Button onClick={this.submitForm}>Add to List</Button>
          </form>
        );
      }
    }

export default TodoForm;