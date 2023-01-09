import React from "react";
import upload from "../../../assets/images/upload.svg";
import Avatar from "../../../assets/images/Mohan-muruge.jpg";

function Upload() {
  return (
    <>
      <button className="header-button button">
        <img src={upload} alt="" className="header-button__icon button__icon" />
        <h3 className="header-button__text button__text">UPLOAD</h3>
      </button>

      <img
        src={Avatar}
        alt=""
        className="header-search__avatar header-search__tabletavatar"
      />
    </>
  );
}

export default Upload;
