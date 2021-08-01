import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Hand from './Hand';
import update from 'immutability-helper';
import './Blackjack.css';

class Blackjack extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameStatus: 'Are you ready?',
      deck_id: '',
      playerHand: [],
      dealerHand: [],
      inProgress: true
    }
  }

  componentDidMount = () => {
    axios
      .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => {
        const newState = {
          deck_id: response.data.deck_id
        }

        this.setState(newState, this.deckHasBeenShuffled);
      });
  }

  componentDidUpdate = () => {
    if (!this.state.inProgress) {
      return;
    }
    if (this.totalHand('playerHand') > 21 && this.state.inProgress) {
      this.setState({
        gameStatus: 'Player Busted!',
        inProgress: false
      });
    }
  }

  deckHasBeenShuffled = () => {
    this.dealCards(2, 'playerHand');
    this.dealCards(2, 'dealerHand');
  }

  dealCards = async (numOfCards, whichHand) => {
    if (!this.state.inProgress) {
      return;
    }

    await axios
      .get(
        `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=${numOfCards}`)
      .then(resp => {
        const newState = {
          [whichHand]: update(this.state[whichHand], {
            $push: resp.data.cards
          })
        }
        this.setState(newState);
      });
  }

  hit = event => {
    this.dealCards(1, 'playerHand');
  }

  stay = async event => {
    while (this.totalHand('dealerHand') < 17) {
      await this.dealCards(1, 'dealerHand');
    }

    if (this.totalHand('dealerHand') > 21) {
      this.setState({
        inProgress: false,
        gameStatus: 'Dealer Busted!'
      });
      return;
    }

    if (this.totalHand('playerHand') > this.totalHand('dealerHand')) {
      this.setState({
        inProgress: false,
        gameStatus: 'Player Wins!'
      });
      return;
    }

    if (this.totalHand('playerHand') < this.totalHand('dealerHand')) {
      this.setState({
        inProgress: false,
        gameStatus: 'Dealer Wins!'
      });
      return;
    }

    if (this.totalHand('playerHand') === this.totalHand('dealerHand')) {
      this.setState({
        inProgress: false,
        gameStatus: 'Tie!'
      });
      return;
    }
  }

  totalHand = whichHand => {
    let total = 0
    this.state[whichHand].forEach(card => {
      const values = {
        ACE: 11,
        KING: 10,
        QUEEN: 10,
        JACK: 10
      }
      total = total + (values[card.value] || parseInt(card.value));
    });
    return total;
  }

  get hideButtons() {
    return this.state.inProgress ? '' : 'hidden';
  }

  _newGame = event => {
    document.location.reload();
  }

  render() {
    return (
      <div className="blackjack-page">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <a className="navbar-brand" href="index.html">React Blackjack</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/blackjack">Play</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <h1 className="top-section">Blackjack</h1>
        <div className="center">
          <p className="game-status">{this.state.gameStatus}</p>
        </div>
        <div className="center">
          <button className="reset hidden">Play Again!</button>
        </div>

        <div className="game-area">
          <div className="left">
            <button className={`hit ${this.hideButtons}`} onClick={this.hit}>
              Hit
            </button>
            <p>Your Cards:</p>
            <p className="player-total">{this.totalHand('playerHand')}</p>
            <div className="player-hand">
              <Hand cards={this.state.playerHand} />
            </div>
          </div>

          <div className="right">
            <button className={`stay ${this.hideButtons}`} onClick={this.stay}>
              Stay
            </button>
            <p>Dealer Cards:</p>
            <p className="dealer-total">{this.totalHand('dealerHand')}</p>
            <div className="dealer-hand">
              <Hand cards={this.state.dealerHand} />
            </div>
          </div>
        </div>
        <div className="new-game">
          <button onClick={this._newGame} className="reset">
            New Game
          </button>
        </div>
      </div>
    )
  }
}

export default Blackjack;