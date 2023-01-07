import React from "react";
import data from "../../../data/video-details.json";

function VideoGen() {
  const vidGen = data.map((element) => {
    let { channel, image, title } = element;

    return (
      <div className="next-videos-container">
        <img src={image} alt="" className="next__video" />
        <div className="next-videos-descr">
          <h3 className="next-videos-descr__title">{title}</h3>
          <p className="next-videos-descr__author">{channel}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="next-videos">{vidGen}</div>
    </>
  );
}

export default VideoGen;
