import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendering: true
    }
  }
  
  clickhandler = () => {
    this.setState({
      isRendering: false
    })
  }

  render() {
    const {isRendering} = this.state; 
    return (
      <div>
        <button onClick={this.clickhandler}>No more tree</button>
        {isRendering ? <Timer /> : null }
      </div>
    );
  }
}

export default App;
