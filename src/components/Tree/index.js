import React, { Component } from 'react';

class Tree extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
        this.state = {
            checked: false
        }
    }
    
    componentDidMount() {
        console.log('Component did mount');
        // Підходить для одноразового (після першого рендеру) побічного ефекту
    }

    componentDidUpdate() {
        console.log('Component did update');
        // Підходить для побічного ефекту, який має бути виконаний після кожного (починаючи з 2) рекндеру компоненти
    }
    
    componentWillUnmount() {
        console.log('component will unmount');
        // Підходить для очищення (зняття) побічних ефектів
    }

    update = () => {
        this.setState({
            checked: true
        })
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log('should component update?')
        /*
        Якщо метод повертає true - компонента потребує оновлення
        Якщо повертає false - оновлення не потрібне

        */
       if (this.state.checked === nextState.checked) {
        return false
       }
       return true
    }
    
    render() {
        /*
        НЕ робіть тут асинхронну роботу!!!
        */
        console.log('Render')
        return (
            <div onClick={this.update}> {/* React.createElement() */}
                Tree
            </div>
        );
    }
}

export default Tree;
