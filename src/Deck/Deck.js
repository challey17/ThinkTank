import React from "react";
import { Link } from "react-router-dom";

export default class Deck extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Link to={"/exampledeck"} className="card-deck">
          <h1>example deck </h1>
        </Link>
      </div>
    );
  }
}
