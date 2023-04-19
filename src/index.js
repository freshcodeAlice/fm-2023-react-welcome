import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <> {/*   <React.Fragment>  */}
    <App userName="John Doe" userAge={18}/>
    <App userName="Jane Crow" userAge={40}/>
    </>
);

