import React from "react";
import photo from "../../image/photos.png";
import forward from "../../image/forward.png";
import "./MessageBar.scss";

const MessageBar = (props) => {
  const dateString = `${props.data.time[0]}, ${props.data.time[1]} ${props.data.time[2]} at ${props.data.time[3]}`;
  const name = props.data.emailID.substring(0, props.data.emailID.indexOf("@"));

  return (
    <div className="boundary">
      <div className="email-section">
        <img src={photo} alt="icon" />
        <div className="div-1">
          <div className="div-11">
            <p>
              <b>{name}</b>
              {`<${props.data.emailID}>`}
            </p>
            <p>{dateString}</p>
          </div>
          <div className="div-12">To: {name}</div>
        </div>
      </div>
      <div className="msg">{props.data.message}</div>
      <div className="btn">
        <button
          onClick={() => {
            props.messageHide();
          }}
        >
          <img src={forward} alt="forward" />
        </button>
      </div>
    </div>
  );
};

export default MessageBar;
