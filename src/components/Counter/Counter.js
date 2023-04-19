import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

    }

    increment = () => {
        const {counter} = this.state;
       this.setState({
        counter: counter + 1
       })
    }

    decrement = () => {
        const {counter} = this.state;
        if (counter > 0) {
            this.setState({
                counter: counter - 1
            })
        }
    }


    render() {
        const {counter} = this.state;
        return (
            <div>
                 <h1>{counter}</h1>
                 <button onClick={this.decrement}>-</button>
                 <button onClick={this.increment}>+</button>   
            </div>
        );
    }
}

export default Counter;




/*  Задачка з *: в компоненті Counter змінити код таким чином, щоб лічильник не опускався нижче 0 */