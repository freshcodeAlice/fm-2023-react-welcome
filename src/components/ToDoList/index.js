import React, { Component } from 'react';
import {format} from 'date-fns';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            isDone: false,
            deadline: new Date()
        }
    }
/*
керовані компоненти:
1. Маємо стан, який співпадає з кероманим елементом
2. Керований елемент (input) в кожний момент часу відображає в якості свого value те, що лежить в стані
3. При зміні даних (при взаємодії) з інпутом маємо ПРИЗВОДИТИ до зміни стану


*/



    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }


    // changeInputHandler = (event) => {
    //     this.setState({
    //         todo: event.target.value
    //     })
    // }

    // checkboxHandler = (event) => {

    //     this.setState({
    //         isDone: event.target.checked
    //     })
    // }
    
    // dateHandler = (event) => {

    //      this.setState({
    //          deadline: new Date(event.target.value)
    //      })
    // }

    generalHandler = ({target}) => {
        switch(target.type) {
            case 'text': {
                this.setState({
                    todo: target.value
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
        const {todo, isDone, deadline} = this.state;
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={todo} onChange={this.generalHandler}/>
                    <label><input type="checkbox" checked={isDone} onChange={this.generalHandler}/>is done?</label>
                    <input type="datetime-local" value={format(deadline, "yyyy-MM-dd hh:mm")} onChange={this.generalHandler}/>
                    <button>Submit</button>
                </form>
                <ul>

                </ul>
            </>
        );
    }
}

export default ToDoList;
