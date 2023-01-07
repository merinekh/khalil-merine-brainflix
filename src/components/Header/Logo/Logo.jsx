import React from "react";
import "./Logo.scss";
import BrainflixLogo from "../../../assets/images/BrainFlix-logo.svg";

function Logo() {
  return (
    <div className="header-logo">
      <img src={BrainflixLogo} alt="" className="header-logo__logo" />
    </div>
  );
}

export default Logo;
