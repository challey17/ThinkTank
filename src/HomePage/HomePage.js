import React, { Component } from "react";
import "./HomePage.css";
import DeckList from "../DeckList/DeckList";
import Navbar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

// CreateDeck and DeckList components will live here
export default class HomePage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <nav>
          <Navbar />
        </nav>
        <main className="homepage-body">
          <header>
            <h1>Home Page</h1>
          </header>
          <section className="deck-display-container">
            <Link to={"/createdeck"} className="create-new-deck">
              create new deck
            </Link>

            <div className="decklist">
              <DeckList props={this.props} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}
