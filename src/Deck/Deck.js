import React from "react";
import { Link } from "react-router-dom";

export default class Deck extends React.Component {
  render() {
    //console.log(this.props.data.decks);

    const currentUserId = 1;
    const currentUserDecks = this.props.data.decks.filter(
      (user) => user.userId === currentUserId
    );
    //console.log(currentUserDecks);
    //bind click event, userdeck.id create variable currentdeckname
    const decksDisplayed = currentUserDecks.map((userdeck) => (
      <div key={userdeck.id} className="userdeck-container">
        <Link to={"/exampledeck?id=" + userdeck.id} className="card-deck">
          <h1> {userdeck.deckname} </h1>
        </Link>
      </div>
    ));

    return <div>{decksDisplayed}</div>;
  }
}
