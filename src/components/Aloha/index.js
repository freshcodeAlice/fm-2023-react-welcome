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

    delete = () => {
        const {user: {id}, deleteCallback} = this.props;
 //       console.log(this.props.user.id);
       deleteCallback(id);
    }

   
    render() {
        const helloText = this.state.isGreeting ? "Привіт" : "Прощавай";
        const {user: {firstName, lastName}} = this.props;
        return (
            <li>
                {helloText}, {firstName} {lastName} <button onClick={this.switch}>Switch</button> 
                <button onClick={this.delete}>X</button>
            </li>
        );
    }
}

export default Aloha;
