import React, { useState } from "react";
import downArrow from "../../image/down-arrow.png";
import "./Content.scss";
import archive from "../../image/archive.png";
import move from "../../image/move.png";
import deleteImg from "../../image/delete.png";
import spam from "../../image/spam.png";
import threeDot from "../../image/three-dot.png";
import ContentBar from "./ContentBar";
import { useSelector } from "react-redux";
import MessageBar from "./MessageBar";

const Content = () => {
  const [emailContent, setEmailContent] = useState(null);
  const emails = useSelector((state) => state.email.emails);

  const messageShowHandler = (index) => {
    setEmailContent(emails[index]);
  };
  const messageHideHandler = () => {
    setEmailContent(null);
  };
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
      <div style={{ marginTop:"20px" }}>
        {/* <div style={{ margin: "15px 0px 5px 0px" }}>
          <b>Today</b>
        </div> */}

        {!emailContent &&
          emails.map((data, index) => (
            <ContentBar
              key={index}
              index={index}
              data={data}
              messageShow={messageShowHandler}
            />
          ))}
        {emailContent && (
          <MessageBar data={emailContent} messageHide={messageHideHandler} />
        )}
        {/* <div style={{ margin: "15px 0px 5px 0px" }}>
          <b>Yesterday</b>
        </div> */}
      </div>
    </div>
  );
};

export default Content;
