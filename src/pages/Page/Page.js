import "./Page.scss";
import React from "react";

function Page() {
  return (
    <>
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload-content">
          <div className="upload-content-video">
            <p className="upload-content-video__title">VIDEO THUMBNAIL</p>
            <img src="" alt="" className="upload-content-video__video" />
          </div>
          <div className="upload-content-inputs">
            <p className="upload-content-inputs__title">TITLE OF YOUR VIDEO</p>
            <input
              type="text"
              name="newTitle"
              id="newTitle"
              className="upload-content-inputs__titleinput"
              placeholder="Add a title to your video"
            />
            <p className="upload-content-inputs__title">
              ADD A VIDEO DESCRIPTION
            </p>
            <input
              type="text"
              name="newTitle"
              id="newTitle"
              className="upload-content-inputs__titleinput"
              placeholder="Add a description to your video"
            />
          </div>
          <div className="upload-content-buttons">
            <button className="upload-content-buttons__cancel">CANCEL</button>
            <button className="upload-content-buttons__publish">
              <img src="" alt="" className="upload-content-buttons__icon" />
              <p className="upload-content-buttons__text">PUBLISH</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
