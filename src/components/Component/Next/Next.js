import React from "react";
import { Link } from "react-router-dom";

function Next({ videoData, data, choseVid }) {
  const vidFilter = data.filter((element) => element.title !== videoData.title);
  //   console.log(vidFilter);
  const vidGen = vidFilter.map((element, i) => {
    let { channel, id, image, title } = element;

    return (
      <Link to={`/${id}`}>
        <div className="next-videos-container">
          <img src={image} alt="" className="next__video" />
          <div className="next-videos-descr">
            <h3 className="next-videos-descr__title">{title}</h3>
            <p className="next-videos-descr__author">{channel}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <>
      <section className="next">
        <h3 className="next__title">NEXT VIDEOS</h3>
        <div className="next-videos">{vidGen}</div>
      </section>
    </>
  );
}

export default Next;
