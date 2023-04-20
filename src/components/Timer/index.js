import React, { Component } from 'react';
import {format, addSeconds} from 'date-fns';

class Timer extends Component {
   constructor(props){
    super(props);
    this.state = {
        time: new Date(0,0,0,0,0,0)
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

            this.setState((state) => ({time: addSeconds(state.time, 1)}))

            /*
            Робота з нативною датою:
            1. Перегнати дату в таймштемп
            2. Додати потрібну кількість мілісекунд
            3. Перегнати це назад і оновити стан
            4. 

            */
        }, 1000);
    }
   }


   stop = () => {
    console.log('timer stops');
    clearInterval(this.intervalId);
    this.intervalId = null;
   }
   
   componentWillUnmount() {
    this.stop();
   }
   
   
    render() {
        const {time} = this.state;
        return (
            <>
            <h1>
                {format(time, 'HH:mm:ss')}
            </h1>
                <button onClick={this.start}>start</button>
                <button onClick={this.stop}>stop </button>
                <button>clear</button>
            </>
        );
    }
}

export default Timer;
