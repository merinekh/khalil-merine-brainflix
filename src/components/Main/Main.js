import "./Main.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";
import Video from "./Video/Video";
import data from "../../data/video-details.json";
import Info from "./Info/Info";
import { useState } from "react";

function Main() {
  const [videoData, setVideoData] = useState(data[0]);
  const choseVid = (index) => {
    setVideoData(data[index]);
    console.log(data[index]);
  };
  // console.log(videoData);

  let { channel, description, likes, timestamp, title, views } = videoData;

  // console.log(channel, description, likes, timestamp, title, views);
  return (
    <main className="main">
      <Video />
      <Info />
    </main>
  );
}

export default Main;
