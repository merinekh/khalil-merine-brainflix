import "./UploadPage.scss";
import React, { useRef, useState, useEffect } from "react";
import upload from "../../assets/images/publish.svg";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

function Page({ image }) {
  let navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const formRef = useRef();
  const BASE_URL = "http://localhost:8080/videos";

  useEffect(() => {
    // Get Students from the back-end server here
    axios.get(BASE_URL).then((response) => {
      setVideos(response.data);
    });
  }, []);
  console.log(formRef);
  const addVideo = (e) => {
    if (formRef) {
      e.preventDefault();
      // Add students to the back-end server, and then update
      // the state with the response
      const formData = {
        title: formRef.current.title.value,
        channel: formRef.current.channel.value,
        image: image,
      };
      axios
        .post(BASE_URL, formData)
        .then((response) => setVideos([...videos, response.data]));

      navigate(
        formRef.current.title.value && formRef.current.channel.value
          ? "/" + alert("Video Submitted.")
          : alert("Please Enter Title and Description")
      );
    } else {
      alert("Please Enter Title and Description");
    }
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
              type="submit"
              className="upload-content-buttons__publish"
              onClick={addVideo}
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
