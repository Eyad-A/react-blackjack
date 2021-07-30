import React, { Component } from 'react';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <p>This is a test</p>
        <Link to='/blackjack'>
          Play Now!
        </Link>
      </div>
    );
  }
}

export default App;