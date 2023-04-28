import React from 'react';
import InnerChild from './InnerChild';

const Child = (props) => {
    return (
        <div style={{border: '2px solid black', padding: '10px'}}>
            <p>Child</p>
            <InnerChild />
        </div>
    );
}

export default Child;
