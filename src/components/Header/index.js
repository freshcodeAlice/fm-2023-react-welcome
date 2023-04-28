import React from 'react';
import UserMenu from './UserMenu';

const Header = () => {
    return (
        <div style={{
            width: '100%', 
            height: '200px', 
            border: '1px solid black', 
            padding: '10px',
            boxSizing: 'border-box'}}>
            <UserMenu />
        </div>
    );
}

export default Header;
