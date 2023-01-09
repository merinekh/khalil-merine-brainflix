import { useState } from "react";
import "./App.scss";
import Component from "./components/Component/Component";
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

      <div className="desktoplayout"></div>
    </div>
  );
}

export default App;
