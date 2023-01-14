import Main from "../Main/Main";
import Next from "../Next/Next";
import data from "../../../data/video-details.json";
import { useState, useEffect } from "react";
import Comments from "../Comments/Comments";
import axios from "axios";
import { useParams } from "react-router";

function HomePage() {
  // =============Import Video info for SideBar=================
  const [dataimport, setDataImport] = useState([]);
  const API_URL = "https://project-2-api.herokuapp.com/";
  const API_PATH = "videos/";
  const API_KEY = "?api_key=c473bb50-76c8-4bb6-96a8-4e8e5acefe10";

  useEffect(() => {
    axios
      .get(API_URL + API_PATH + API_KEY)
      .then((response) => {
        setDataImport(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ================Choose Video to Display==============
  const [videoData, setVideoData] = useState(data[0]);
  const choseVid = (index) => {
    setVideoData(index);
  };

  //   console.log(videoData);
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
