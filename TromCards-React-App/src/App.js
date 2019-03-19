import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Game from "./components/games.js/Game";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div id="guessColor" className="guess-color" />
          <Navbar />
          <section className="app-section">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/game" component={Game} />
            </Switch>
          </section>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
