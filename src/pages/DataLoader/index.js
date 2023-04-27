import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
import DataProvider from '../../components/DataProvider';

class DataLoader extends Component {
    render() {
        return (
            <div>
                <DataProvider loadData={() =>
                    fetch('/users.json')
                        .then(res => res.json())}>
                    {(state) => {
                        return (
                            <>
                                <h1>UserList</h1>
                                {state.isFetching && <Spinner />}
                                {state.error &&
                                    <div>Ops</div>}
                                <ul>
                                    {state.data.map(u => <li>{u.firstName} - {u.lastName}</li>)}
                                </ul>
                            </>
                        )
                    }}


                </DataProvider>


                <DataProvider loadData={() =>
                    fetch('/phones.json')
                        .then(res => res.json())}
                    children={() => {
                        return <h1>PhonesList</h1>
                    }} />
            </div>
        );
    }
}

export default DataLoader;
