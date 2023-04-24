import React, { Component } from 'react';
import Spinner from '../Spinner';

const API_BASE = 'https://fakestoreapi.com/users';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: null,
            isFetching: true
        }
    }

    componentDidMount = () => {
        
        fetch(API_BASE)
        .then(res => res.json())
        .then(data => {
            this.setState({
                users: data
            })
        })
        .catch(error => {
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
        const {users, error, isFetching} = this.state;
        const usersMap = users.map(
            ({name: {firstname, lastname}, username, id}) => <li key={id}> <h3>{username} </h3> {firstname} {lastname}</li>)
        return (
            <>
            <h1>
               Users List 
            </h1>
            {isFetching && <Spinner />}
            {error && <div>Ooops, something goes wrong</div>}
            <ul>
                {usersMap}
            </ul>
            </>
        );
    }
}

export default UserList;


/*
1. Показати юзеру, що ми не замерзли, ми працюємо
+2. Показати юзеру помилку, якщо вона сталася

*/