console.log(React);

const state = `Hello`;

const h1 = React.createElement('h1', {}, `${state}, react!`);
console.log(h1);

console.log(ReactDOM);


const root = document.querySelector('#root');

ReactDOM.render(h1, root)