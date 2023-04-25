import React, { Component } from 'react';

class Header extends Component {



    render() {
        return (
            <div style={{width: '100%', height: '300px', backgroundColor: 'lightgreen'}}>
               {this.props.children}
            </div>
        );
    }
}

export default Header;
