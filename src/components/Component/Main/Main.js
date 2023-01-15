import React from "react";
import { IoMdVolumeHigh } from "react-icons/io";
import { MdOutlineFullscreen } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import viewsIcon from "../../../assets/images/views.svg";
import likesIcon from "../../../assets/images/likes.svg";
function Main({ videoData }) {
  let { channel, description, duration, likes, image, title, video, views } =
    videoData;
  return (
    <>
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
              :00/{duration}
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
              <p className="main-bio-info-stats-views__count">{views}</p>
            </div>
            <div className="main-bio-info-stats-likes">
              <img
                src={likesIcon}
                alt=""
                className="main-bio-info-stats-likes__icons"
              />
              <p className="main-bio-info-stats-likes__count">{likes}</p>
            </div>
          </div>
        </div>
        <hr className="main-bio__line" />
        <div className="main-bio-descr">
          <p className="main-bio-descr">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Main;
