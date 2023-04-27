import React, { Component } from 'react';
import Spinner from '../Spinner';

class UserLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFetching: true,
            error: null
        }
    }
    
    componentDidMount() {
        fetch('/users.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                data
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
        const {data, isFetching, error} = this.state;
        return (
            <div>
                {isFetching && <Spinner />}
                {error && <div> OOOPS </div>}
               <ul>
                {data.map(u => <li>{u.firstName} {u.lastName} </li>)}
                </ul> 
            </div>
        );
    }
}

export default UserLoader;
