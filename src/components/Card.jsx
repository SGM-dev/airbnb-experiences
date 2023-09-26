import React from "react";
import starImg from "../assets/star.png";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--img" src={`src/assets/${props.item.coverImg}`} />
      <div className="card--stats">
        <img className="rating--img" src={starImg} />
        <span className="rating--score ">{props.item.stats.rating}</span>
        <span className="ratings gray">({props.item.stats.reviewCount}) • </span>
        <span className="country--info gray">{props.item.location}</span>
      </div>
      <p className="experience--info">{props.item.title}</p>
      <p className="experience--cost">
        <span>From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
