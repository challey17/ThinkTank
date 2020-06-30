import React, { Component } from "react";
import "./HomePage.css";
import Navbar from "../NavBar/NavBar";

// CreateDeck and DeckList components will live here
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <nav>
          <Navbar />
        </nav>
        <main className="homepage-body">
          <header>
            <h1>Home Page</h1>
          </header>

          <div className="create-deck-icon">
            <button>create new deck</button>
          </div>
          <div className="decklist">
            Deck LIST
            <h2>placholder deck</h2>
            <h2>placholder deck</h2>
          </div>
        </main>
      </div>
    );
  }
}
