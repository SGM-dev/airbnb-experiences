import React from "react";
import starImg from "../assets/star.png";

export default function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
}) {
  return (
    <div className="card">
      <div className="card--badge">SOLD OUT</div>
      <img className="card--img" src={`src/assets/${img}`} />
      <div className="card--stats">
        <img className="rating--img" src={starImg} />
        <span className="rating--score ">{rating}</span>
        <span className="ratings gray">({reviewCount}) • </span>
        <span className="country--info gray">{location}</span>
      </div>
      <p className="experience--info">{title}</p>
      <p className="experience--cost">
        <span>From ${price}</span> / person
      </p>
    </div>
  );
}
