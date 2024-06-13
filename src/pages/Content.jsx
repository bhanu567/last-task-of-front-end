import React from "react";
import downArrow from "../image/down-arrow.png";
import "./Content.scss";
import archive from "../image/archive.png";
import move from "../image/move.png";
import deleteImg from "../image/delete.png";
import spam from "../image/spam.png";
import threeDot from "../image/three-dot.png";
import ContentBar from "./ContentBar";

const Content = () => {
  return (
    <div>
      <div className="heading">
        <div>
          <input type="checkbox" />
          <button>
            <img src={downArrow} alt="down-arrow" />
          </button>
        </div>
        <div className="middle">
          <button>
            <img src={archive} alt="archive" />
            Archive
          </button>
          <button>
            <img src={move} alt="move" />
            Move
          </button>
          <button>
            <img src={deleteImg} alt="delete" />
            Delete
          </button>
          <button>
            <img src={spam} alt="spam" />
            Spam
          </button>
          <button>
            <img src={threeDot} alt="three-dot" />
          </button>
        </div>
        <div>
          Sort
          <button style={{ marginLeft: "5px" }}>
            <img src={downArrow} alt="down-arrow" />
          </button>
        </div>
      </div>
      <hr style={{ border: "1px solid black", margin: "0px" }} />
      <div style={{ padding: "0px 25px" }}>
        <div style={{ margin: "15px 0px 5px 0px" }}>
          <b>Today</b>
        </div>
        <ContentBar />
        <ContentBar />
        <ContentBar />
        <ContentBar />
        <div style={{ margin: "15px 0px 5px 0px" }}>
          <b>Yesterday</b>
        </div>
        <ContentBar />
        <ContentBar />
        <ContentBar />
      </div>
    </div>
  );
};

export default Content;
