import React from "react";
import "./Next.scss";
import data from "../../data/video-details.json";

function Next() {
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
    <section className="next">
      <h3 className="next__title">NEXT VIDEOS</h3>
      <div className="next-videos">{vidGen}</div>
    </section>
  );
}

export default Next;
