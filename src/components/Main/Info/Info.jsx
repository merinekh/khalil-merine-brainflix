import React from "react";
import "./Info.scss";
import viewsIcon from "../../../assets/images/views.svg";
import likesIcon from "../../../assets/images/likes.svg";
import data from "../../../data/video-details.json";

function Info() {
  let videoData = data[0];
  // console.log(videoData);

  let { channel, description, likes, timestamp, title, views } = videoData;
  return (
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
  );
}

export default Info;
