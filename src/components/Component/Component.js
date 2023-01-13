import React from "react";
import "./Component.scss";

import data from "../../data/video-details.json";
import mohAvatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/add_comment.svg";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "../../pages/Page/Page";
import Header from "./Header/Header";
import Main from "./Main/Main";

function Component() {
  const [videoData, setVideoData] = useState(data[0]);
  const choseVid = (index) => {
    setVideoData(index);
  };
  // console.log(videoData);

  let { image } = videoData;

  //   console.log(videoData);
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

  const vidFilter = data.filter((element) => element.title !== videoData.title);
  //   console.log(vidFilter);
  const vidGen = vidFilter.map((element) => {
    let { channel, image, title } = element;

    return (
      <div
        className="next-videos-container"
        index={element}
        onClick={() => choseVid(element)}
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/videoUpload" element={<Page image={image} />} />
        </Routes>
      </BrowserRouter>

      <Main videoData={videoData} />
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
          <hr class="section-form__line"></hr>
          <section className="comments-container">
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
