import React from "react";
import { Link } from "react-router-dom";

export default function Deck() {
  return (
    <div>
      <Link to={"/exampledeck"} className="card-deck">
        <h1>example deck</h1>
      </Link>
    </div>
  );
}
