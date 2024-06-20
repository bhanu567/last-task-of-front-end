import React from "react";
import "./ContentBar.scss";
import dot from "../../image/dot.png";
import star from "../../image/star.png";
import deletebtn from "../../image/delete.png";
import { useDispatch } from "react-redux";
import { emailActions } from "../../store/reducer/emailSlice";
const ContentBar = (props) => {
  const dispatch = useDispatch();
  const messageShowHandler = () => {
    dispatch(emailActions.messageUpdateState(props.index));
    props.messageShow(props.index);
  };
  const emailDeleteHandler = () => {
    dispatch(emailActions.deleteEmail(props.index));
  };
  const name = props.data.emailID.substring(0, props.data.emailID.indexOf("@"));

  return (
    <div className="outer1">
      <button className="outer-bar" onClick={messageShowHandler}>
        <div className="img-input">
          <input type="checkbox" />
          {props.data.unread && <img src={dot} alt="single dot" />}
        </div>
        <div className="name">
          <b>{name}</b>
        </div>
        <div className="message">
          <img src={star} alt="star" />
          <b>{props.data.emailID}</b>
          &nbsp;{props.data.message}...
        </div>
        <div className="date">{props.data.time[1]}</div>
      </button>
      <button className="imgbtn" onClick={emailDeleteHandler}>
        <img src={deletebtn} alt="delete" />
      </button>
    </div>
  );
};

export default ContentBar;
