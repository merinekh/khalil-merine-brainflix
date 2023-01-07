import React from "react";
import upload from "../../../assets/images/upload.svg";

function Upload() {
  return (
    <>
      <button className="header-button button">
        <img src={upload} alt="" className="header-button__icon button__icon" />
        <h3 className="header-button__text button__text">UPLOAD</h3>
      </button>
    </>
  );
}

export default Upload;
