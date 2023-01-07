import React from "react";
import Avatar from "../../../assets/images/Mohan-muruge.jpg";
import searchicon from "../../../assets/images/search.svg";

function Search() {
  return (
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
  );
}

export default Search;
