import React, { Component } from 'react';

// COMPONENTS
import AppNavbar from './components/AppNavbar';

// STYLING
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
      </div>
    );
  }
}

export default App;
