import React, { useState } from "react";
import "./Next.scss";
import data from "../../data/video-details.json";

function Next() {
  const [VideoData, setVideoData] = useState(data[0]);
  const choseVid = (index) => {
    setVideoData(data[index]);
    console.log(VideoData, data[index]);
    return data[index];
  };
  // console.log(videoData);
  const vidGen = data.map((element, i) => {
    let { channel, image, title } = element;

    return (
      <div
        className="next-videos-container"
        index={i}
        onClick={() => choseVid(i)}
      >
        <img src={image} alt="" className="next__video" />
        <div className="next-videos-descr">
          <h3 className="next-videos-descr__title">{title}</h3>
          <p className="next-videos-descr__author">{channel}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="next">
      <h3 className="next__title">NEXT VIDEOS</h3>
      <div className="next-videos">{vidGen}</div>
    </section>
  );
}

export default Next;
