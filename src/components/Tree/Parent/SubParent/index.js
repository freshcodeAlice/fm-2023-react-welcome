import React from 'react';
import Child from './Child';

const SubParent = (props) => {
    return (
        <div style={{border: '2px solid black', padding: '10px'}}>
        <p>SubParent</p>
            <Child />
        </div>
    );
}

export default SubParent;
