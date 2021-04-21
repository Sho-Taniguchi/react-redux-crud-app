 import React, { Component } from 'react';

// function App() {
class App extends Component {
  render () {
    const greeting = "Hello World.";

    return (
      <React.Fragment>
          <h1 className="foo">
            {greeting}
          </h1>
          <label htmlFor="bar">bar</label>
          <input type="text" onChange={() => {console.log("Hi!")}} />
      </React.Fragment>
    );
  }
}

export default App;
