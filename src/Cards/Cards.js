import React from "react";
import Navbar from "../NavBar/NavBar";

export default function Cards() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className="study-cards-body">
        <header>
          <h1>Example Deck Title</h1>
        </header>
        <section className="cards-display-container">
          <h1>question/front</h1>
          <h1>answer/back</h1>
          <button>back</button>
          <h3>1/20</h3>
          <button>forward</button>
        </section>
      </main>
    </div>
  );
}
