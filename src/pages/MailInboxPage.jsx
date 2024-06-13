import React from "react";
import { NavLink } from "react-router-dom";
import searchImg from "../image/search.png";

import yahooLogo from "../image/yahoo-logo.png";
import "./MailInboxPage.scss";
import Sidebar from "./Sidebar";
import Content from "./Content";

const MailInboxPage = () => {
  return (
    <div>
      <nav className="nav-bar">
        <NavLink to="/">
          <img src={yahooLogo} alt="yahooImage" className="nav-img" />
        </NavLink>

        <div className="input-dropdown">
          <input
            list="email"
            type="text"
            placeholder="Find messages, documents, photos or people"
            className="input-box"
          />

          <datalist id="email">
            <option value="Message" />
            <option value="Documents" />
            <option value="Photos" />
            <option value="People" />
          </datalist>
          <button className="search-button">
            <img src={searchImg} alt="search icon" />
          </button>
        </div>
      </nav>
      <div className="content-area">
        <div style={{ width: "20%"}}>
          <Sidebar />
        </div>
        <div style={{ width: "80%"}}>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default MailInboxPage;
