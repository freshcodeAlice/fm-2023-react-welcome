import React, { Component } from 'react';

class Aloha extends Component {
    constructor(props) {
        super(props);
        this.state = {
           isGreeting: true
        }
    }
   
    switch = () => {
        const {isGreeting} = this.state;
        this.setState({
            isGreeting: !isGreeting
        })
    }
   
    render() {
        const helloText = this.state.isGreeting ? "Привіт" : "Прощавай"
        return (
            <div>
                {helloText}, {this.props.userName} <button onClick={this.switch}>Switch</button>
            </div>
        );
    }
}

export default Aloha;
