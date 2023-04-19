import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    


    increment = () => {
        this.setState({
            counter: this.state.counter+1
        })
    }

    render() {
        const {counter} = this.state;
        return (
            <div className='box'
                onClick={this.increment}>
                {counter}
            </div>
        );
    }
}

export default Box;
