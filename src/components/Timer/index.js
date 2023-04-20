import React, { Component } from 'react';

class Timer extends Component {
   constructor(props){
    super(props);
    this.state = {
        count: 0
    }
    this.intervalId = null;
   }

   componentDidMount() {
    this.start();
   }


   start = () => {
    console.log('timer started');
    if(!this.intervalId){
        this.intervalId = setInterval(()=>{
            // this.setState({
            //     count: this.state.count + 1
            // })

            this.setState((state) => ({count: state.count+1}))
        }, 1000);
    }
   }


   stop = () => {
    console.log('timer stops');
    clearInterval(this.intervalId);
   }
   
   componentWillUnmount() {
    this.stop();
   }
   
   
    render() {
        const {count} = this.state;
        return (
            <>
            <h1>
                {count}
            </h1>
                <button onClick={this.start}>start</button>
                <button onClick={this.stop}>stop </button>
                <button>clear</button>
            </>
        );
    }
}

export default Timer;
