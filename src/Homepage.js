import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaHandPointRight } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Homepage.css';
import video from "./React-Blackjack.mp4";

class Homepage extends Component {
  render() {
    return (
      <main className="flex-shrink-0">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <a className="navbar-brand" href="index.html">React Blackjack</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/blackjack">Play</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="bg-success py-5">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-7">
                <div className="my-5 text-center text-xl-start">
                  <h1 className="display-5 fw-bolder text-white mb-2">A Blackjack game built in React</h1>
                  <p className="lead fw-normal text-white text-start mb-4">Playing Blackjack has never been this easy. Take a seat and try your luck at this Blackjack game built in React.js</p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">                    
                    <Link className="btn btn-primary btn-lg btn-light px-4 me-sm-3 play-button" to="/blackjack">Play Now</Link>
                    <a className="btn btn-outline-light btn-lg px-4" href="#features">Learn More</a>
                  </div>
                </div>
              </div>              
              <div className="col-lg-5 text-center">
                <div className="embed-responsive embed-responsive-16by9">                  
                  <iframe title="video-demo" className="embed-responsive-item" src={video} frameBorder="0" mozallowfullscreen="true" allowFullScreen></iframe>                  
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="py-5" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">A better way to play Blackjack</h2></div>
              <div className="col-lg-8">
                <h3>Project Details</h3>
                <ul className="list-group list-group-flush my-4">
                  <li className="list-group-item"><span><FaHandPointRight /></span> A Blackjack game built using React.js</li>
                  <li className="list-group-item"><span><FaHandPointRight /></span> On initial load, a new game is started. Simply click "hit" or "stay"</li>
                  <li className="list-group-item"><span><FaHandPointRight /></span> The objective of the game is to beat the dealer's hand without going over 21</li>
                  <li className="list-group-item"><span><FaHandPointRight /></span> If you go over 21, it's a "bust" and you lose. If the dealer goes over 21, you win</li>
                  <li className="list-group-item"><span><FaHandPointRight /></span> Click "New Game" to start a new game</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="py-1 bg-light">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-4 mb-5">
                <img src="https://i.imgur.com/xlQkUaE.jpg" className="img-fluid biopic" alt="Developer of this app" />
              </div>
              <div className="col-lg-8 mb-5 biotext">
                <h3>Your Host This Evening</h3>
                <h5 className="my-4">Eyad Alshafi</h5>
                <p>Welcome one and all to my humble project. My name is Eyad, and I created this Blackjack 
                game as part of the Mintbean hackathaon. I'm a software developer with experience in a wide array of 
                technologies including: JavaScript, React, jQuery, Node, Express, Python, Flask, SQL, and many more. 
                You can learn more about me by visiting <a href="https://eyad-a.github.io/portfolio/" target="_blank" rel="noreferrer">my portfolio</a>.</p>
                
                <p className="text-center my-5">
                  <span>
                    <a href="https://www.linkedin.com/in/eyad-alshafi/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                  </span>
                  <span className="mx-5">
                    <a href="https://github.com/Eyad-A/" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span>
                    <a href="https://eyad-a.github.io/portfolio/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Homepage;