import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h2>ThinkTank</h2>
      <p>This is a blurb about the app that will be short and sweet.</p>
      <button className="button login-button">LOGIN</button>
      <button className="button signup-button">SIGNUP</button>
    </div>
  );
}
