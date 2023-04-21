import React, { Component } from 'react';
import {format} from 'date-fns';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoBody: '',
            isDone: false,
            deadline: new Date()
        }
    }
    
    submitHandler = (event) => {
        event.preventDefault();
      this.props.callback(this.state);
    }

    generalHandler = ({target}) => {
        switch(target.type) {
            case 'text': {
                this.setState({
                    todoBody: target.value
                 });
                 break;
            }
            case 'checkbox': {
                this.setState({
                     isDone: target.checked
                 });
                 break;
            }
            case 'datetime-local': {
                this.setState({
                 deadline: new Date(target.value)
              });
              break;
            }
        }
    }


    /*

    handler = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

     */



    render() {
        const {todoBody, isDone, deadline} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" value={todoBody} onChange={this.generalHandler}/>
                <label><input type="checkbox" checked={isDone} onChange={this.generalHandler}/>is done?</label>
                <input type="datetime-local" value={format(deadline, "yyyy-MM-dd hh:mm")} onChange={this.generalHandler}/>
                <button>Submit</button>
            </form>
        );
    }
}

export default ToDoForm;
