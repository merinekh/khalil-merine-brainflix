import Main from "../../components/Component/Main/Main";
import Next from "../../components/Component/Next/Next";
import { useState, useEffect } from "react";
import Comments from "../../components/Component/Comments/Comments";
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
  const [videoData, setVideoData] = useState([]);
  const { Id } = useParams();
  // console.log(Id);
  const videoId = Id || "84e96018-4022-434e-80bf-000ce4cd12b8";

  useEffect(() => {
    // console.log(API_URL + API_PATH + `${videoId}` + API_KEY);
    if (videoId) {
      axios
        .get(API_URL + API_PATH + `${videoId}` + API_KEY)
        .then((response) => {
          setVideoData(response.data);
          // console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [videoId]);

  //   console.log(videoData);
  return (
    <>
      <Main videoData={videoData} />
      <div className="desktoplayout">
        <Comments videoData={videoData} />
        <Next videoData={videoData} data={dataimport} />
      </div>
    </>
  );
}

export default HomePage;
