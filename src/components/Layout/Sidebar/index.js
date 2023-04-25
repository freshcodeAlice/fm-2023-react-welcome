import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div style={{width: '30%', height: '50vh', backgroundColor: 'coral'}}>
                {this.props.children}
            </div>
        );
    }
}

export default Sidebar;
