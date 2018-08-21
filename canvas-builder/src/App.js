import React, { Component } from 'react';
import './App.css';
import Navbar from './Shared/Navbar'
import Paper from "./Shared/Paper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div style={{margin:"4rem 1rem"}}>
          <Paper header="Teste" description="Lorem ipsum vehicula mauris viverra tempor sociosqu dui vel est pulvinar viverra luctus, enim luctus dui cursus sapien quis vel interdum duis sit."/>
        </div>
      </div>
    );
  }
}

export default App;
