import React, { Component } from 'react';

class Timer extends Component {
   constructor(props){
    super(props);
    this.state = {
        count: 0
    }
   }


   start = () => {
    setInterval(()=>{
        this.setState({
            count: this.state.count + 1
        })
    }, 1000);
   }
   
   
   
    render() {
        const {count} = this.state;
        return (
            <h1>
                {count}
            </h1>
        );
    }
}

export default Timer;
