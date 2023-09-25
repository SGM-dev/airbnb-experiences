import React from "react";
import heroImage from "../assets/photo-grid.png";

export default function Hero() {
  return (
    <header className="hero">
      <img src={heroImage} alt="photo-grid" className="hero--img" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </header>
  );
}
