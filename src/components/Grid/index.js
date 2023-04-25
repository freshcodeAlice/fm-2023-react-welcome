import React from 'react';

const GridContainer = (props) => {
    const {children} = props;
    return (
        <div style={{maxWidth: '1200px'}}>
        {children} 
        </div>
    );
}

export default GridContainer;
