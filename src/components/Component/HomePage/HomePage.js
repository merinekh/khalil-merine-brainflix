import React from "react";
import Main from "../Main/Main";
import Next from "../Next/Next";
import data from "../../../data/video-details.json";
import { useState } from "react";
import Comments from "../Comments/Comments";

function HomePage() {
  const [videoData, setVideoData] = useState(data[0]);
  const choseVid = (index) => {
    setVideoData(index);
  };
  // console.log(videoData);

  return (
    <>
      <Main videoData={videoData} />
      <div className="desktoplayout">
        <Comments videoData={videoData} />
        <Next videoData={videoData} data={data} choseVid={choseVid} />
      </div>
    </>
  );
}
export default HomePage;
