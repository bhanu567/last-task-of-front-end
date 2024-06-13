import React from "react";
import "./ContentBar.scss";
import dot from "../image/dot.png";
import star from "../image/star.png";

const ContentBar = (props) => {
  return (
    <button className="outer-bar">
      <input type="checkbox" />
      <div className="name">
        <img src={dot} alt="single dot" /> <b>Wakefit</b>
      </div>
      <div className="message">
        <img src={star} alt="star" />
        <b>Lowest Price Ever on Mattress:Up to 45% off.</b>
        Get up to 45% off on Best Mattress with 100 nights f...
      </div>
      <div className="time">7:45 am</div>
    </button>
  );
};

export default ContentBar;
