import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { buttonActions } from "../../store/reducer/buttonSlice";
import { fetchEmail } from "../../store/action/fetchEmail";
import "./Sidebar.scss";
import upArrow from "../../image/up-arrow.png";
import downArrow from "../../image/down-arrow.png";
import photos from "../../image/photos.png";
import document from "../../image/document.png";
import subscription from "../../image/subscription.png";
import deals from "../../image/deals.png";
import travel from "../../image/travel.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [viewsHide, setViewsHide] = useState(true);
  const [foldersHide, setFoldersHide] = useState(true);
  const [less, setLess] = useState(true);
  const unread = useSelector((state) => state.email.unread);
  const totalEmails = useSelector((state) => state.email.totalEmails);
  const active = useSelector((state) => state.button);
  return (
    <div className="sidebar">
      <button
        className="compose"
        onClick={() => navigate("/email", { replace: true })}
      >
        Compose
      </button>

      <button
        className={active.inbox ? "active" : ""}
        onClick={() => {
          dispatch(buttonActions.setInbox());
        }}
      >
        <span>Inbox</span>
        <span style={{ marginRight: "0px" }}>{totalEmails}</span>
      </button>
      <button
        className={active.unread ? "active" : ""}
        onClick={() => {
          dispatch(buttonActions.setUnread());
        }}
      >
        <span>Unread</span>
        <span>{unread}</span>
      </button>
      <button
        className={active.starred ? "active" : ""}
        onClick={() => {
          dispatch(buttonActions.setStarred());
        }}
      >
        <span>Starred</span>
        <span></span>
      </button>
      <button
        className={active.drafts ? "active" : ""}
        onClick={() => {
          dispatch(buttonActions.setDrafts());
        }}
      >
        <span>Drafts</span>
        <span>78</span>
      </button>

      {less && (
        <>
          <button
            className={active.sent ? "active" : ""}
            onClick={() => {
              dispatch(buttonActions.setSent());
              dispatch(fetchEmail());
            }}
          >
            <span>Sent</span>
            <span></span>
          </button>
          <button
            className={active.archieve ? "active" : ""}
            onClick={() => {
              dispatch(buttonActions.setArchieve());
            }}
          >
            <span>Archive</span>
            <span></span>
          </button>
          <button
            className={active.spam ? "active" : ""}
            onClick={() => {
              dispatch(buttonActions.setSpam());
            }}
          >
            <span>Spam</span>
            <span></span>
          </button>
          <button
            className={active.deleted ? "active" : ""}
            onClick={() => {
              dispatch(buttonActions.setDeleted());
            }}
          >
            <span>Deleted Items</span>
            <span></span>
          </button>
        </>
      )}
      <button className="arrow-parent">
        <button className="arrow" onClick={() => setLess(!less)}>
          <img
            src={less ? upArrow : downArrow}
            alt={less ? "up-arrow" : "down-arrow"}
          />
        </button>
        {less ? "Less" : "More"}
      </button>
      <button className="next-column">
        <span>Views</span>
        <button className="hide" onClick={() => setViewsHide(!viewsHide)}>
          {viewsHide ? "hide" : "show"}
        </button>
      </button>
      {viewsHide && (
        <>
          <button
            className={active.photos ? "active" : ""}
            onClick={() => {
              dispatch(buttonActions.setPhotos());
            }}
          >
            <span>
              <img src={photos} alt="photos"></img> Photos
            </span>
            <span></span>
          </button>
          <button
            className={active.documents ? "active" : ""}
            onClick={() => {
              dispatch(buttonActions.setDocuments());
            }}
          >
            <span>
              <img src={document} alt="documnets"></img> Documents
            </span>
            <span></span>
          </button>
          <button
            className={active.subscription ? "active" : ""}
            onClick={() => {
              dispatch(buttonActions.setSubscription());
            }}
          >
            <span>
              <img src={subscription} alt="subscription"></img> Subscriptions
            </span>
            <span></span>
          </button>
          <button
            className={active.deals ? "active" : ""}
            onClick={() => {
              dispatch(buttonActions.setDeals());
            }}
          >
            <span>
              <img src={deals} alt="deals"></img> Deals
            </span>
            <span></span>
          </button>
          <button
            className={active.travel ? "active" : ""}
            onClick={() => {
              dispatch(buttonActions.setTravel());
            }}
          >
            <span>
              <img src={travel} alt="travel"></img> Travel
            </span>
            <span></span>
          </button>{" "}
        </>
      )}
      <button className="next-column">
        <span>Folders</span>
        <button className="hide" onClick={() => setFoldersHide(!foldersHide)}>
          {foldersHide ? "hide" : "show"}
        </button>
      </button>
      {foldersHide && (
        <button
          style={{ marginBottom: "200px" }}
          className={active.newFolder ? "active" : ""}
          onClick={() => {
            dispatch(buttonActions.setNewFolder());
          }}
        >
          <span>
            <b>+ </b>New folder
          </span>
          <span></span>
        </button>
      )}
    </div>
  );
};

export default Sidebar;
