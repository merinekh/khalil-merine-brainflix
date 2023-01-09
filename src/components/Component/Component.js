import React from "react";
import { IoMdSearch } from "react-icons/io";
import BrainflixLogo from "../../assets/images/BrainFlix-logo.svg";
import upload from "../../assets/images/upload.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Component.scss";
function Component() {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <a href="./">
            <img src={BrainflixLogo} alt="" className="header-logo__logo" />
          </a>
        </div>
        <div className="header-search">
          <div className="header-search-inputs">
            <IoMdSearch />
            <input
              className="header-search__input"
              type="search"
              name="search"
              id=""
              placeholder=" Search"
            />
          </div>

          <img src={Avatar} alt="" className="header-search__avatar" />
        </div>
        <button className="header-button button">
          <img
            src={upload}
            alt=""
            className="header-button__icon button__icon"
          />
          <h3 className="header-button__text button__text">UPLOAD</h3>
        </button>

        <img
          src={Avatar}
          alt=""
          className="header-search__avatar header-search__tabletavatar"
        />
      </header>
    </>
  );
}

export default Component;
