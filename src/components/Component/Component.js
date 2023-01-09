import React from "react";
import { IoMdSearch } from "react-icons/io";
import BrainflixLogo from "../../assets/images/BrainFlix-logo.svg";
import upload from "../../assets/images/upload.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Component.scss";
import { useState } from "react";
import { MdOutlineFullscreen } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

import data from "../../data/video-details.json";
function Component() {
  const [videoData, setVideoData] = useState(data[0]);
  const choseVid = (index) => {
    setVideoData(data[index]);
    console.log(data[index]);
  };
  // console.log(videoData);

  let { channel, description, likes, timestamp, title, views } = videoData;

  let { duration, image, video } = videoData;

  // console.log(video);
  console.log(channel, description, likes, timestamp, title, views);

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

      <main className="main">
        <div className="main-video">
          <video url={video} poster={image} className="main__video"></video>

          <div className="main-video-controller">
            <div className="main-video-controller-play">
              <button className="main-video-controller__play">
                <FaPlay />
              </button>
            </div>

            <div className="main-video-controller-timeline">
              <hr className="main-video-controller-timeline__line" />
              <p className="main-video-controller-timeline__duration">
                2:00/{duration}
              </p>
            </div>
            <div className="main-video-controller-options">
              <button className="main-video-controller__fullscreen">
                <MdOutlineFullscreen />
                {/* {fullscreenIcon} */}
              </button>
              <button className="main-video-controller__volume">
                <IoMdVolumeHigh />
              </button>
            </div>
          </div>
        </div>
        <div className="main-video-info">
          <h1 className="main-bio__title">{title}</h1>
          <hr className="main-bio__line" />
          <div className="main-bio-info">
            <div className="main-bio-info-descr">
              <h3 className="main-bio-info-descr__author">By {channel}</h3>
              <p className="main-bio-info-descr__date">07/11/2021</p>
            </div>
            <div className="main-bio-info-stats">
              <div className="main-bio-info-stats-views">
                <img
                  src={viewsIcon}
                  alt=""
                  className="main-bio-info-stats-views__icons"
                />
                <p clssName="main-bio-info-stats-views__count">{views}</p>
              </div>
              <div className="main-bio-info-stats-likes">
                <img
                  src={likesIcon}
                  alt=""
                  className="main-bio-info-stats-likes__icons"
                />
                <p clssName="main-bio-info-stats-likes__count">{likes}</p>
              </div>
            </div>
          </div>
          <hr className="main-bio__line" />
          <div className="main-bio-descr">
            <p className="main-bio-descr">{description}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Component;
