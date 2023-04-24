import React from 'react';
import {format} from 'date-fns';
import styles from './ToDoItem.module.css';
import PropTypes from 'prop-types';


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
            <li className={styles.item}> 
            <div>
                <input type="checkbox" checked={isDone} onChange={this.changeCheckbox}/>  
                <span className={styles.body}>{body}</span> 
            </div>
 
            <span className={styles['deadline-date']}>{format(deadline, "yyyy-MM-dd hh:mm")}</span>
            <div>
            <button onClick={this.changeView}>Edit</button>
            <button onClick={this.deleteChange}>X</button>
            </div>

        </li>
        );
    }
}

ToDoItem.propTypes = {
    todo: PropTypes.shape({
        isDone: PropTypes.bool.isRequired, 
        todoBody: PropTypes.string.isRequired, 
        deadline: PropTypes.instanceOf(Date).isRequired, 
        id: PropTypes.number.isRequired
    }).isRequired,
    change: PropTypes.func.isRequired,
    changeText: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}



export default ToDoItem;
