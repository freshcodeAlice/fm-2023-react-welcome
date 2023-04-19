import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';


const state = 1;

//const App = React.createElement('div', {data: 'value'}, 'Text');  // <div>Text</div>

const App = <div data="value">{state}</div>

console.log(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  App
);

