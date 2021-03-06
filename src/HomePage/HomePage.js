import React, { Component } from "react";
import "./HomePage.css";
import DeckList from "../DeckList/DeckList";
import Navbar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

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
          <section className="deck-display-container">
            <Link to={"/createdeck"} className="create-new-deck">
              create new deck
            </Link>

            <div className="decklist">
              <DeckList data={this.props.data} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}
