import React, { Component } from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Routes />
          </div>
        </Router>        
      </div>
    );
  }
}

export default App;