import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

export default function App() {
  const cardHtml = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">{cardHtml}</div>
    </>
  );
}
