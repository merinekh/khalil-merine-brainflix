import React from "react";
import "./Video.scss";
import data from "../../../data/video-details.json";
// import ReactPlayer from "react-player";
import Controler from "./Controler/Controler";

function Video() {
  let videoData = data[0];
  //   console.log(videoData);

  let { duration, image, video } = videoData;

  console.log(video);

  return (
    <div className="main-video">
      <video url={video} poster={image} className="main__video"></video>
      <Controler />
    </div>
  );
}

export default Video;
