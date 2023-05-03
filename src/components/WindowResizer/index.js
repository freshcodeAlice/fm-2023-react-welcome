import React, { useState, useEffect} from 'react';


/*
Написати компонент WindowResizer, який виводить на екран такий вміст:

<h1>Current sizes:</h1>
x: ....px
y: ....px


При зміні розміру вікна вони мають перераховуватись відносно поточних цифр

*/

function WindowResizer (props) {
    const [sizes, setSizes] = useState(
        {x: window.innerWidth,
        y: window.innerHeight});
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         x: window.innerWidth,
    //         y: window.innerHeight
    //     }
    // }

    // componentDidMount() {
    //     window.addEventListener('resize', this.handleResize)
    // }

    useEffect(()=> {
        window.addEventListener('resize', handleResize)
        return () =>{
            window.removeEventListener('resize', this.handleResize)
        }
    })

    handleResize = () => {
        // this.setState({
        //     x: window.innerWidth,
        //     y: window.innerHeight
        // })
        setSizes({
         x: window.innerWidth,
           y: window.innerHeight
        })
    }

    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.handleResize)
    // }
    
 //   render() {
        // return this.props.children(this.state);
 //   }

 return (
    <>
    <h1>x: {}</h1>
    <h1>y: {}</h1>
    </>
 )
}

export default WindowResizer;
