import React from "react";
import Avatar from "../../../assets/images/Mohan-muruge.jpg";
import searchicon from "../../../assets/images/search.svg";
import "./Search.scss";
import { IoMdSearch } from "react-icons/io";

function Search() {
  return (
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
  );
}

export default Search;
