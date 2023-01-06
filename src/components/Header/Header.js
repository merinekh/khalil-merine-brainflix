import "./Header.scss";
import { IoLogoYoutube } from "react-icons/io";
import BrainflixLogo from "../../assets/images/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/upload.svg";
import searchicon from "../../assets/images/search.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={BrainflixLogo} alt="" className="header-logo__logo" />
      </div>
      <div className="header-search">
        <input
          className="header-search__input"
          type="search"
          name="search"
          id=""
          placeholder=" Search"
        />
        <img src={Avatar} alt="" className="header-search__avatar" />
      </div>
      <button className="header-button">
        <img src={upload} alt="" className="header-button__icon" />
        <h3 className="header-button__text">UPLOAD</h3>
      </button>
    </header>
  );
}

export default Header;
