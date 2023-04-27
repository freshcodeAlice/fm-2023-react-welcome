import React, { Component } from 'react';
import Counter from '../../components/Counter/Counter';

class CounterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        }
    }

    handleChange = ({target: {value, name}}) => {
        this.setState({
            [name]: Number(value)
        })
    }
    
    render() {
        const {step} = this.state;
        return (
            <div>
                <input type='range' value={step} name="step" onChange={this.handleChange} min={1} max={50}/>
                <Counter step={step}/>
            </div>
        );
    }
}

export default CounterPage;
