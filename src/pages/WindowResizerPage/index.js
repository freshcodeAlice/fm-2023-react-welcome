import React from 'react';
import WindowResizer from '../../components/WindowResizer';

const WindowResizerPage = () => {
    return (
        <div>
            <WindowResizer>
                {({x, y}) => {
                    return (
                        <div>
                            <h1>Current sizes:</h1>
                            <p>x: {x}</p>
                            <p>y: {y}</p>
                        </div>
                    );
                }}
            </WindowResizer>
        </div>
    );
}

export default WindowResizerPage;
