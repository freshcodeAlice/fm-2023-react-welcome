console.log(React);

console.log(ReactDOM);

const component = (data) => {
    const h2 = React.createElement('h2', {}, data.heading); // <h2>{data.heading}</h2> --- JSX
    const p = React.createElement('p', {}, 'Lorem ipsum'); //<p>Lorem ipsum</p> --- JSX
    return React.createElement('div', {}, h2, p);
}

const elem = React.createElement(component, {heading: 'Heading text'});
const elem2 = React.createElement(component,  {heading: 'Hello to user'});

const root = document.querySelector('#root');

ReactDOM.render(elem2, root)