import React, { Component } from "react";
import "./games.scss";
import loseSound from "../../audio/fart1.mp3";
import winSound from "../../audio/smb_powerup.wav";

class Game extends Component {
  state = {
    deck: [],
    gameCards: [],
    missingCard: "",
    cardCounter: 0,
    speed: 2500,
    countdown: 3,
    pickCard: false,
    startGame: false
  };

  componentDidMount() {
    this.setState(
      {
        deck: this.props.location.state.deck,
        speed: this.props.location.state.speed
      },
      () => {
        if (this.state.deck.length > 0) {
          const { speed } = this.state;
          let gameCards = this.state.deck;
          let missingCard =
            gameCards[Math.floor(Math.random() * gameCards.length)];
          gameCards = gameCards.filter(card => card !== missingCard);
          gameCards = gameCards
            .map(card => [Math.random(), card])
            .sort((a, b) => a[0] - b[0])
            .map(card => card[1]);
          this.setState({
            gameCards,
            missingCard
          });
          this.countdownTimer = setInterval(() => {
            let { countdown } = this.state;
            countdown > 1 ? countdown-- : clearInterval(this.countdownTimer);
            this.setState({ countdown });
          }, 1000);
          this.waitForCountdown = setTimeout(() => {
            this.setState({ startGame: true });
            this.displayCardsOneByOne = setInterval(() => {
              let { cardCounter } = this.state;
              cardCounter++;
              this.setState({ cardCounter });
              if (this.state.cardCounter >= this.state.gameCards.length - 1) {
                clearInterval(this.displayCardsOneByOne);
                this.lastCardShown = setTimeout(() => {
                  this.setState({ pickCard: true });
                  console.log(this.state);
                }, speed);
              }
            }, speed);
          }, 3000);
        }
      }
    );
  }

  componentWillUnmount() {
    clearInterval(this.countdownTimer);
    clearTimeout(this.waitForCountdown);
    clearInterval(this.displayCardsOneByOne);
    clearTimeout(this.lastCardShown);
  }

  onClick = e => {
    if (e.target.id === this.state.missingCard) {
      document.getElementById("win").onended = () => {
        this.props.history.push({
          pathname: "/",
          state: { speed: this.state.speed }
        });
      };
      document.getElementById("win").play();
    } else {
      document.getElementById("fart").load();
      document.getElementById("fart").play();
    }
  };

  render() {
    const visibleCard =
      this.state.gameCards.length > 0 ? (
        <img
          className="single-card"
          src={require(`../../images/${
            this.state.gameCards[this.state.cardCounter]
          }.jpg`)}
          alt="card"
        />
      ) : null;

    const displayCards =
      this.state.deck.length > 0
        ? this.state.deck.map(card => {
            return (
              <img
                onClick={this.onClick}
                key={card}
                id={card}
                className="row-card"
                src={require(`../../images/${card}.jpg`)}
                alt={`${card}`}
              />
            );
          })
        : null;

    const displayGame = this.state.pickCard ? displayCards : visibleCard;

    return (
      <div className="Game">
        {this.state.startGame ? (
          displayGame
        ) : (
          <h1 className="countdown">{this.state.countdown}</h1>
        )}
        <audio src={loseSound} id="fart" />
        <audio src={winSound} id="win" />
      </div>
    );
  }
}

export default Game;
