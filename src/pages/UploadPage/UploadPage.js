import "./UploadPage.scss";
import React from "react";
import upload from "../../assets/images/publish.svg";
import { useNavigate, NavLink } from "react-router-dom";

function Page({ image }) {
  let navigate = useNavigate();

  const handleOnclick = () => {
    let newTitle = document.getElementById("newTitle").value;
    let newDescr = document.getElementById("newTitle").value;
    console.log(newTitle, newDescr);
    navigate(
      newTitle && newDescr ? "/" : alert("Please Enter Title and Description")
    );
  };
  return (
    <>
      <hr className="upload-line__header" />
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload-content">
          <div className="upload-desktoplayer">
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
                name="newDescr"
                id="newDescr"
                className="upload-content-inputs__titleinput"
                placeholder="Add a description to your video"
              />
            </form>
          </div>

          <div className="upload-content-buttons">
            <NavLink to="/">
              <button className="upload-content-buttons__cancel">CANCEL</button>
            </NavLink>

            <button
              className="upload-content-buttons__publish"
              onClick={handleOnclick}
            >
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
