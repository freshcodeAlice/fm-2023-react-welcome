import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import styles from './Layout.css';
import Avatar from './Avatar';

class Layout extends Component {
    
    render() {
        return (
            <>
            <Header>
                <Avatar/>
            </Header>
            <main>
            <Sidebar>
                <Avatar />
            </Sidebar>
                <Main>

                </Main>

            </main>
            </>
        );
    }
}

export default Layout;
