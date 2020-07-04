import React from "react";
import Navbar from "../NavBar/NavBar";

export default class Cards extends React.Component {
  render() {
    console.log(this.props.data.cards);

    const currentDeckId = 12345;
    const cardsInThisDeck = this.props.data.cards.filter(
      (cards) => cards.deckId === currentDeckId
    );

    console.log(cardsInThisDeck);
    ////NOT SURE IF I SHOULD DO IT THIS WAY
    ///HOW CAN I DISPLAY THEM ONE AT A TIME
    // WITH THE INDEX FROM ARRAY? onClick i++ for forward
    const currentCardDisplayed = cardsInThisDeck.map((card) => (
      <section className="cards-display-container" key={card.id}>
        <h1>{card.question}</h1>
        <h1>{card.answer}</h1>
        <button>back</button>
        <h3>1/20</h3>
        <button>forward</button>
      </section>
    ));
    return (
      <div>
        <nav>
          <Navbar />
        </nav>
        <main className="study-cards-body">
          <header>
            <h1>Example Deck Title</h1>
          </header>
          {/* here */}
          {currentCardDisplayed}
        </main>
      </div>
    );
  }
}
