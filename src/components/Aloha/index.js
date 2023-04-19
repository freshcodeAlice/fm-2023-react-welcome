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
        const helloText = this.state.isGreeting ? "Привіт" : "Прощавай";
        const {user: {firstName, lastName}} = this.props;
        return (
            <div>
                {helloText}, {firstName} {lastName} <button onClick={this.switch}>Switch</button>
            </div>
        );
    }
}

export default Aloha;
