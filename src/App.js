import React, { Component } from 'react';
import Welcome from './components/Welcome'
import VibeForm from './components/VibeForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <VibeForm />
      </div>
    );
  }
}

export default App;
