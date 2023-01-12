import "./Page.scss";
import React from "react";
import upload from "../../assets/images/publish.svg";

function Page({ image }) {
  return (
    <>
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload-content">
          <div className="upload-content-video">
            <p className="upload-content-video__title subtitle">
              VIDEO THUMBNAIL
            </p>
            <img src={image} alt="" className="upload-content-video__video" />
          </div>
          <form className="upload-content-inputs">
            <p className="upload-content-inputs__title subtitle">
              TITLE OF YOUR VIDEO
            </p>
            <input
              type="text"
              name="newTitle"
              id="newTitle"
              className="upload-content-inputs__titleinput"
              placeholder="Add a title to your video"
            />
            <p className="upload-content-inputs__title subtitle">
              ADD A VIDEO DESCRIPTION
            </p>
            <textarea
              type="text"
              name="newTitle"
              id="newTitle"
              className="upload-content-inputs__titleinput"
              placeholder="Add a description to your video"
            />
          </form>
          <div className="upload-content-buttons">
            <button className="upload-content-buttons__cancel">CANCEL</button>
            <button className="upload-content-buttons__publish">
              <img
                src={upload}
                alt=""
                className="upload-content-buttons__icon"
              />
              <h3 className="upload-content-buttons__text button__text">
                PUBLISH
              </h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
