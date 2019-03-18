import React, { Component } from "react";
import classnames from "classnames";
import "./dashboard.scss";

class Dashboard extends Component {
  state = {
    diamonds: [
      "2D",
      "3D",
      "4D",
      "5D",
      "6D",
      "7D",
      "8D",
      "9D",
      "10D",
      "JD",
      "QD",
      "KD",
      "aceD"
    ],
    hearts: [
      "2H",
      "3H",
      "4H",
      "5H",
      "6H",
      "7H",
      "8H",
      "9H",
      "10H",
      "JH",
      "QH",
      "KH",
      "AH"
    ],
    spades: [
      "2S",
      "3S",
      "4S",
      "5S",
      "6S",
      "7S",
      "8S",
      "9S",
      "10S",
      "JS",
      "QS",
      "KS",
      "AS"
    ],
    clubs: [
      "2C",
      "3C",
      "4C",
      "5C",
      "6C",
      "7C",
      "8C",
      "9C",
      "10C",
      "JC",
      "QC",
      "KC",
      "AC"
    ],
    speed: 2500
  };

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.speed) {
      this.setState({ speed: this.props.location.state.speed });
    }
  }

  onGameClick = cards => {
    this.props.history.push({
      pathname: "/game",
      state: { deck: cards, speed: this.state.speed }
    });
  };

  setSpeed = speed => {
    this.setState({ speed });
  };

  render() {
    const redCards = [...this.state.diamonds, ...this.state.hearts];
    const blackCards = [...this.state.clubs, ...this.state.spades];
    const fullDeck = [
      ...this.state.diamonds,
      ...this.state.hearts,
      ...this.state.clubs,
      ...this.state.spades
    ];
    const displayDeck = fullDeck.map(card => {
      return (
        <img
          key={card}
          id="card"
          className="single-card"
          src={require(`../../images/${card}.jpg`)}
          alt={`${card}`}
        />
      );
    });

    const setDifficultyButtons = (
      <div className="difficulty-buttons">
        <button
          onClick={this.setSpeed.bind(this, 2500)}
          className={classnames("select-difficulty", {
            "select-difficulty-active": this.state.speed === 2500,
            "select-difficulty-inactive": this.state.speed !== 2500
          })}
        >
          Easy
        </button>
        <button
          onClick={this.setSpeed.bind(this, 2000)}
          className={classnames("select-difficulty", {
            "select-difficulty-active": this.state.speed === 2000,
            "select-difficulty-inactive": this.state.speed !== 2000
          })}
        >
          Medium
        </button>
        <button
          onClick={this.setSpeed.bind(this, 1500)}
          className={classnames("select-difficulty", {
            "select-difficulty-active": this.state.speed === 1500,
            "select-difficulty-inactive": this.state.speed !== 1500
          })}
        >
          Hard
        </button>
        <button
          onClick={this.setSpeed.bind(this, 1000)}
          className={classnames("select-difficulty", {
            "select-difficulty-active": this.state.speed === 1000,
            "select-difficulty-inactive": this.state.speed !== 1000
          })}
        >
          Very Hard
        </button>
        <button
          onClick={this.setSpeed.bind(this, 500)}
          className={classnames("select-difficulty", {
            "select-difficulty-active": this.state.speed === 500,
            "select-difficulty-inactive": this.state.speed !== 500
          })}
        >
          Impossible
        </button>
      </div>
    );

    return (
      <section className="Dashboard">
        {setDifficultyButtons}
        <div className="games">
          <button
            onClick={this.onGameClick.bind(this, this.state.clubs)}
            className="start"
          >
            Clubs
          </button>
          <button
            onClick={this.onGameClick.bind(this, this.state.diamonds)}
            className="start"
          >
            Diamonds
          </button>
          <button
            onClick={this.onGameClick.bind(this, this.state.hearts)}
            className="start"
          >
            Hearts
          </button>
          <button
            onClick={this.onGameClick.bind(this, this.state.spades)}
            className="start"
          >
            Spades
          </button>
          <button
            onClick={this.onGameClick.bind(this, redCards)}
            className="start"
          >
            Red Cards
          </button>
          <button
            onClick={this.onGameClick.bind(this, blackCards)}
            className="start"
          >
            Black Cards
          </button>
          <button
            onClick={this.onGameClick.bind(this, fullDeck)}
            className="start"
          >
            Full Deck
          </button>
        </div>
        <div className="display-deck">{displayDeck}</div>
      </section>
    );
  }
}

export default Dashboard;
