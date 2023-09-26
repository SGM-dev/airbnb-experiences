import React from "react";
import starImg from "../assets/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--img" src={`src/assets/${props.coverImg}`} />
      <div className="card--stats">
        <img className="rating--img" src={starImg} />
        <span className="rating--score ">{props.stats.rating}</span>
        <span className="ratings gray">({props.stats.reviewCount}) • </span>
        <span className="country--info gray">{props.location}</span>
      </div>
      <p className="experience--info">{props.title}</p>
      <p className="experience--cost">
        <span>From ${props.price}</span> / person
      </p>
    </div>
  );
}
