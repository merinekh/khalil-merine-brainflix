import { useState } from "react";
import "./App.scss";
import Comments from "./components/Comments/Comments";
import Component from "./components/Component/Component";
import Main from "./components/Main/Main";
import Next from "./components/Next/Next";
import data from "./data/video-details.json";

function App() {
  // const [videoData, setVideoData] = useState(data[0]);
  // const choseVid = (index) => {
  //   setVideoData(data[index]);
  //   console.log(data[index]);
  // };
  // console.log(videoData);
  return (
    <div className="App">
      <Component />
      <Main />
      <div className="desktoplayout">
        <Comments />
        <Next />
      </div>
    </div>
  );
}

export default App;
