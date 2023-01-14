import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VideoPage() {
  const { videoId } = useParams();
  const [data, setData] = useState([]);

  const API_URL = "https://project-2-api.herokuapp.com/";
  const API_PATH = "videos/";
  const API_KEY = "?api_key=c473bb50-76c8-4bb6-96a8-4e8e5acefe10";

  useEffect(() => {
    axios
      .get(API_URL + API_PATH + API_KEY)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <></>;
}

export default VideoPage;
