import React from "react";
import "./Component.scss";
import { IoMdSearch, IoMdVolumeHigh } from "react-icons/io";
import { MdOutlineFullscreen } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import BrainflixLogo from "../../assets/images/BrainFlix-logo.svg";
import upload from "../../assets/images/upload.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";
import data from "../../data/video-details.json";
import mohAvatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/add_comment.svg";
import { useState } from "react";

function Component() {
  const [videoData, setVideoData] = useState(data[0]);
  const choseVid = (index) => {
    setVideoData(data[index]);
    // console.log(data[index]);
  };
  // console.log(videoData);

  let { channel, description, likes, timestamp, title, views } = videoData;

  let { duration, image, video } = videoData;

  // console.log(video);
  //   console.log(channel, description, likes, timestamp, title, views);
  const dataComments = videoData.comments;
  // console.log(dataComments);
  const commentsGen = dataComments.map((element) => {
    let { comment, name, timestamp } = element;
    timestamp = new Date(timestamp).toLocaleDateString("en", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    // console.log(name, comment, timestamp);
    return (
      <div className="comment-container-items">
        <div className="comment-container">
          <img src="" alt="" className="comment__image" />
          <div className="comment-inputs">
            <div className="comment-profile">
              <h3 className="comment-profil__name">{name}</h3>
              <p className="comment-profil__date">{timestamp}</p>
            </div>
            <p className="comment__comment">{comment}</p>
          </div>
        </div>

        <hr class="section-form__line"></hr>
      </div>
    );
  });

  const vidGen = data.map((element, i) => {
    let { channel, image, title } = element;

    return (
      <div
        className="next-videos-container"
        index={i}
        onClick={() => choseVid(i)}
      >
        <img src={image} alt="" className="next__video" />
        <div className="next-videos-descr">
          <h3 className="next-videos-descr__title">{title}</h3>
          <p className="next-videos-descr__author">{channel}</p>
        </div>
      </div>
    );
  });

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

      <div className="desktoplayout">
        <section className="comments">
          <h2 className="comments__title">3 Comments</h2>
          <form action="" class="comments-form-main">
            <img src={mohAvatar} alt="" class="comments-form__image" />
            <div class="comments-form-inputs">
              <h3 class="comments-form-subtitle__comment comments-form-subtitle">
                JOIN THE CONVERSATION
              </h3>
              <textarea
                name=""
                id=""
                cols="33"
                rows="4"
                placeholder="Enter your comment"
                class="comments-form-inputs__comment"
              ></textarea>
              <button
                type="submit"
                value="COMMENT"
                class="comments-form-inputs__button button"
              >
                <img src={commentIcon} alt="" className="button__icon" />
                <h3 className="button__text">COMMENT</h3>
              </button>
            </div>
            <button
              type="submit"
              value="COMMENT"
              class="comments-form-inputs__button comments-form-inputs__Tabletbutton button"
            >
              <img src={commentIcon} alt="" className="button__icon" />
              <h3 className="button__text">COMMENT</h3>
            </button>
          </form>
          <section className="comments-container">
            <hr class="section-form__line"></hr>
            <div className="comment-container-gen">{commentsGen}</div>
          </section>
        </section>

        <section className="next">
          <h3 className="next__title">NEXT VIDEOS</h3>
          <div className="next-videos">{vidGen}</div>
        </section>
      </div>
    </>
  );
}

export default Component;
