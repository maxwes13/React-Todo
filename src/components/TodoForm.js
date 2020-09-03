import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   form: {
        width: '100%',
        marginTop: theme.spacing(1),
      },
    button: {
        margin: theme.spacing(1),
    }
  }));

const TodoForm = (props) => {

    const classes = useStyles();

return (
<form className={classes.root} noValidate autoComplete="off" onSubmit={props.handleSubmit}>

    <TextField 
    className="Todo" 
    label="Outlined" 
    variant="outlined"
     />

    <Button>Add Todo</Button>
    <Button 
    className="clear-btn" 
    onClick={props.clearCompleted}>
        Clear Completed
    </Button>
</form>

)
}

export default TodoForm;