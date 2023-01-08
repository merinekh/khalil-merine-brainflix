import React from "react";
import "./Controller.scss";
import { ReactComponent as playIcon } from "../../../../assets/images/play.svg";
import fullscreenIcon from "../../../../assets/images/fullscreen.svg";
import volumeIcon from "../../../../assets/images/fullscreen.svg";
import Slider from "@mui/material/Slider";
import { MdOutlineFullscreen } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import data from "../../../../data/video-details.json";

function Controler() {
  let videoData = data[0];

  let { duration } = videoData;
  return (
    <>
      <div className="main-video-controller">
        <div className="main-video-controller-play">
          <button className="main-video-controller__play">
            <FaPlay />
          </button>
        </div>

        <div className="main-video-controller-timeline">
          <hr className="main-video-controller-timeline__line" />
          <p className="main-video-controller-timeline__duration">
            2:00/{duration}
          </p>
        </div>
        <div className="main-video-controller-options">
          <button className="main-video-controller__fullscreen">
            <MdOutlineFullscreen />
            {/* {fullscreenIcon} */}
          </button>
          <button className="main-video-controller__volume">
            <IoMdVolumeHigh />
          </button>
        </div>
      </div>
    </>
  );
}

export default Controler;
