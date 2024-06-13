import React from "react";
import upArrow from "../image/up-arrow.png";
import "./Sidebar.scss";
import photos from "../image/photos.png";
import document from "../image/document.png";
import subscription from "../image/subscription.png";
import deals from "../image/deals.png";
import travel from "../image/travel.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <button
        className="compose"
        onClick={() => navigate("/email", { replace: true })}
      >
        Compose
      </button>
      <button className="active">
        <span>Inbox</span>
        <span style={{ marginRight: "0px" }}>999+</span>
      </button>
      <button>
        <span>Unread</span>
        <span></span>
      </button>
      <button>
        <span>Starred</span>
        <span></span>
      </button>
      <button>
        <span>Drafts</span>
        <span>78</span>
      </button>
      <button>
        <span>Sent</span>
        <span></span>
      </button>
      <button>
        <span>Archive</span>
        <span></span>
      </button>
      <button>
        <span>Spam</span>
        <span></span>
      </button>
      <button>
        <span>Deleted Items</span>
        <span></span>
      </button>
      <button className="up-arrow-parent">
        <button className="up-arrow">
          <img src={upArrow} alt="up-arrow" />
        </button>
        Less
      </button>
      <button className="next-column">
        <span>Views</span>
        <button className="hide">Hide</button>
      </button>
      <button>
        <span>
          <img src={photos} alt="photos"></img> Photos
        </span>
        <span></span>
      </button>
      <button>
        <span>
          <img src={document} alt="documnets"></img> Documents
        </span>
        <span></span>
      </button>
      <button>
        <span>
          <img src={subscription} alt="subscription"></img> Subscriptions
        </span>
        <span></span>
      </button>
      <button>
        <span>
          <img src={deals} alt="deals"></img> Deals
        </span>
        <span></span>
      </button>
      <button>
        <span>
          <img src={travel} alt="travel"></img> Travel
        </span>
        <span></span>
      </button>
      <button className="next-column">
        <span>Folders</span>
        <button className="hide">Hide</button>
      </button>
      <button style={{ marginBottom: "200px" }}>
        <span>
          <b>+ </b>New folder
        </span>
        <span></span>
      </button>
    </div>
  );
};

export default Sidebar;
