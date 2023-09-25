import React from "react";
import starImg from "../assets/star.png";
import katieZafares from "../assets/katie-zaferes.png";

export default function Card() {
  return (
    <div className="card">
      <img className="card--img" src={katieZafares} />
      <div className="card--stats">
        <img className="rating--img" src={starImg} />
        <span className="rating--score ">5.0</span>
        <span className="ratings gray">(6) •</span>
        <span className="country--info gray">USA</span>
      </div>
      <p className="experience--info">Life lessons with Katie Zaferes</p>
      <p className="experience--cost">
        <span>From $136</span> / person
      </p>
    </div>
  );
}
