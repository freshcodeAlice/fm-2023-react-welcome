import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';



const App = () => {
  return (
    <h1>Hello, react!</h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    React.createElement(App)
);

