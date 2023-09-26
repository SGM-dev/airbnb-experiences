import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

export default function App() {
  const cardHtml = data.map((exp) => {
    return (
      <Card
        key={exp.id}
        img={exp.coverImg}
        rating={exp.stats.rating}
        reviewCount={exp.stats.reviewCount}
        location={exp.location}
        title={exp.title}
        price={exp.price}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">{cardHtml}</div>
    </>
  );
}
