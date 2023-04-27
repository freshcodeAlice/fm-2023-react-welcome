import React, { Component } from 'react';
import Spinner from '../Spinner';

class PhonesLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: [],
            isFetching: true,
            error: null
        }
    }

    componentDidMount() {
        fetch('/phones.json')
        .then(res => res.json())
        .then((phones) => {
            this.setState({
                phones
            })
        })
        .catch((error) => {
            this.setState({
                error
            })
        })
        .finally(() => {
            this.setState({
                isFetching: false
            })
        })
    }
    
    render() {
        const {phones, isFetching, error} = this.state;
        return (
            <div>
                {isFetching && <Spinner />}
                {error && <div>Ops </div>}
                <ol>
                    {phones.map((p) => <li key={p.id}>{p.model} -- {p.price}</li>)}
                </ol>
            </div>
        );
    }
}

export default PhonesLoader;
