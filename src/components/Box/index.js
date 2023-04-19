import React, { Component } from 'react';

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
            <div style={{width: '300px', height: '300px', backgroundColor: 'green'}}
                onClick={this.increment}>
                {counter}
            </div>
        );
    }
}

export default Box;
