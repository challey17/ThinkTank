import React from "react";
import Deck from "../Deck/Deck";

export default class DeckList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Deck props={this.props} />
        <Deck props={this.props} />
        <Deck props={this.props} />
      </div>
    );
  }
}
