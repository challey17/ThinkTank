import React, { Component } from "react";

import { Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";
import Cards from "./Cards/Cards";
import "./App.css";
import Homepage from "./HomePage/HomePage";
import CreateDeckForm from "./CreateDeckForm/CreateDeckForm";
import data from "./STORE";
// how to set up routes for landing page and home?
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }

  render() {
    console.log(data.cards[2].question);
    return (
      <main className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exat path="/home" component={Homepage} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/createdeck" component={CreateDeckForm} />
        <Route exact path="/exampledeck" component={Cards} />
      </main>
    );
  }
}

export default App;
