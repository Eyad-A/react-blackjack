import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Routes />
          </div>
        </BrowserRouter>        
      </div>
    );
  }
}

export default App;