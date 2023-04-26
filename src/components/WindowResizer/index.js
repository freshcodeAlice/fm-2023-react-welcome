import React, { Component } from 'react';


/*
Написати компонент WindowResizer, який виводить на екран такий вміст:

<h1>Current sizes:</h1>
x: ....px
y: ....px


При зміні розміру вікна вони мають перераховуватись відносно поточних цифр

*/

class WindowResizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: window.innerWidth,
            y: window.innerHeight
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        this.setState({
            x: window.innerWidth,
            y: window.innerHeight
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
    
    render() {
        const {x, y} = this.state;
        return (
            <div>
                <h1>Current sizes:</h1>
                <p>x: {x}</p>
                <p>y: {y}</p>
            </div>
        );
    }
}

export default WindowResizer;
