import React from "react";
import "./Video.scss";
import data from "../../../data/video-details.json";

function Video() {
  let videoData = data[0];
  //   console.log(videoData);

  let { duration, image, video } = videoData;

  console.log(video);

  return (
    <div className="main-video">
      <video src={video} poster={image} className="main__video"></video>
      <div className="main-video-controller"></div>
    </div>
  );
}

export default Video;
