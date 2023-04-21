import React from 'react';
import {format} from 'date-fns';


/*
Parent -> Child  ---- props
Child -> Parent ----- callback(props)

Child1 -> Child2 ------ Child1 -> Parent -> Child2
*/


const ToDoItem = (props) => {
    const {isDone, todoBody, deadline, id} = props.todo;

    const changeCheckbox = (event) => {
        props.change(event.target.checked, id);
    }

    const deleteChange = () => {
        props.delete(id);
    }

    return (
        <li> 
            <input type="checkbox" checked={isDone} onChange={changeCheckbox}/> - <span>{todoBody}</span> - 
            <span>{format(deadline, "yyyy-MM-dd hh:mm")}</span>
            <button onClick={deleteChange}>X</button>
        </li>
    );
}

export default ToDoItem;
