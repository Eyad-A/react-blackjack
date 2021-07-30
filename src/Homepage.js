import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div>
        <h1 className="homepage-h1">Homepage</h1>
        <p>This is a test</p>
        <Link className="btn btn-lg btn-warning" to='/blackjack'>
          Play Now!
        </Link>
      </div>
    );
  }
}

export default Homepage;