import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img src="../../logo.svg" className="header_logo" />
      <div className="header_logos">
        <a className="home">
          <img src="../../home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a className="search">
          <img src="../../search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a className="watchlist">
          <img src="../../watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a className="orignal">
          <img src="../../original-icon.svg" alt="" />
          <span>ORIGNALS</span>
        </a>
        <a className="movie">
          <img src="../../movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a className="series">
          <img src="../../series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </div>
      <img
        src="https://yt3.ggpht.com/yti/APfAmoGofpZOYyV9c9TUQQinlxFu3P2uBVfxTCS-_QrOQg=s88-c-k-c0x00ffffff-no-rj-mo"
        className="userProfilep"
        alt=""
      />
    </div>
  );
}

export default Header;
