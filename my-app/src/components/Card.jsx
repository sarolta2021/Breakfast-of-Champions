import React from "react";

function Card({ title, sub, text, index }) {
  return (
    <div className="Cards">
      <div className="onlyText">
        <p className="sub">{sub}</p>
        <p className="title">{title}</p>

        <p className="text">{text}</p>
        <p className="index">{index}</p>
      </div>
      <div className="readmoreandarrow">
        <p className="readmore">read more</p>
        <span className="material-icons readmorearrow">arrow_forward</span>
      </div>
    </div>
  );
}

export default Card;
