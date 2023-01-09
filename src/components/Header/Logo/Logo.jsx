import React from "react";
import "./Logo.scss";
import BrainflixLogo from "../../../assets/images/BrainFlix-logo.svg";

function Logo() {
  return (
    <div className="header-logo">
      <a href="./">
        <img src={BrainflixLogo} alt="" className="header-logo__logo" />
      </a>
    </div>
  );
}

export default Logo;
