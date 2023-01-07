import "./Main.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";
import Video from "./Video/Video";
import data from "../../data/video-details.json";
import Info from "./Info/Info";

function Main() {
  let videoData = data[0];
  console.log(videoData);

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
