import React from "react";
import "./Next.scss";
import VideoGen from "./VideoGen/VideoGen";

function Next() {
  return (
    <section className="next">
      <h3 className="next__title">NEXT VIDEOS</h3>
      <VideoGen />
    </section>
  );
}

export default Next;
