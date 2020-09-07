// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import { Button } from '@material-ui/core'

const TodoList = (props) => {
    return(
<div className="todo-list">
            {props.tasks.map((item) => (
                <Todo 
                key={item.id} 
                item={item} 
                toggleItem={props.toggleItem} />
            ))}
    <Button 
    className="clear-btn" 
    onClick={props.clearCompleted}>
        Clear Completed
    </Button>
</div>
    )

}

export default TodoList;