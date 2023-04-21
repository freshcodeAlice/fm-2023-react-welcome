import React from 'react';
import {format} from 'date-fns';


/*
Parent -> Child  ---- props
Child -> Parent ----- callback(props)

Child1 -> Child2 ------ Child1 -> Parent -> Child2
*/

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    changeCheckbox = (event) => {
        const {todo:{id}} = this.props;
        this.props.change(event.target.checked, id);
    }

    deleteChange = () => {
        const {todo:{id}} = this.props;
        this.props.delete(id);
    }

    changeView = () => {
        const {editMode} = this.state;
        this.setState({
            editMode: !editMode
        })
    }

    bodyChangeHandler = ({target: {value}}) => {
        const {changeText, todo:{id}} = this.props;
        changeText(value, id);
    }

    
    render() {
        const {isDone, todoBody, deadline, id} = this.props.todo;
        const {editMode}= this.state;
        const body = editMode ? <input value={todoBody} onChange={this.bodyChangeHandler}/> : todoBody
        return (
            <li> 
            <input type="checkbox" checked={isDone} onChange={this.changeCheckbox}/> - 
            <span>{body}</span> - 
            <span>{format(deadline, "yyyy-MM-dd hh:mm")}</span>
            <button onClick={this.changeView}>Edit</button>
            <button onClick={this.deleteChange}>X</button>
        </li>
        );
    }
}


export default ToDoItem;
