import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
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
        console.log(event);
    }


    changeInputHandler = (event) => {
        this.setState({
            todo: event.target.value
        })
    }
    

    render() {
        console.log(this.state.todo);
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.todo} onChange={this.changeInputHandler}/>
                    <button>Submit</button>
                </form>
                <ul>

                </ul>
            </>
        );
    }
}

export default ToDoList;
