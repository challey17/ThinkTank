import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";
import "./App.css";
import Homepage from "./HomePage/HomePage";
// how to set up routes for landing page and home?
function App() {
  return (
    <main className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exat path="/home" component={Homepage} />
      <Route exact path="/signup" component={SignupForm} />
      <Route exact path="/login" component={LoginForm} />
    </main>
  );
}

export default App;
