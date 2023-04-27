import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        counter: counter + this.props.step
       })
    }

    decrement = () => {
        const {counter} = this.state;
        if (counter > 0) {
            this.setState({
                counter: counter - this.props.step
            })
        }
    }

    /*  ПЕРЕДЧАСНА ОПТИМІЗАЦІЯ - ЦЕ ЗЛО  */

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.step !== this.props.step) {
            return false
        }
        return true
    }


    render() {
        const {counter} = this.state;
        console.log('rerender')
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

Counter.defaultProps = {
    step: 5
}


Counter.propTypes = {
    step: PropTypes.number
}


/*

const prevState = {
    value: true
}
const nextState = {
    value: true
}

---


const prevState = {
    test: {
        capacity: {
            volume: 5
        }
    }
}

const nextState = {
    {
    test: {
        capacity: {
            volume: 5
        }
    }
}
}


{} === {} //false

*/