import React from "react";
import Navbar from "../NavBar/NavBar";
//import queryString from "query-string";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.location.search, "props for cards");

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

    console.log(currentDeckId.valueOf());

    // this is just hardcoded, needs logic
    //2 array methods, filter
    //const currentDeckname = this.props.data.decks[2].deckname;

    const currentDeckname = this.props.data.decks.filter(
      (deckname) => deckname.id === currentDeckId.valueOf()
    );
    // console.log(this.props.data.decks(...decks).id);
    console.log(currentDeckname);
    //console.log(this.props.data.decks.id);
    return (
      <div>
        <nav>
          <Navbar />
        </nav>
        <main className="study-cards-body">
          <header>
            <h1>{currentDeckname[0].deckname}</h1>
          </header>
          {/* here */}
          {currentCardDisplayed}
        </main>
      </div>
    );
  }
}
