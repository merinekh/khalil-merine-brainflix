import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DataFetching() {
  useEffect(() => {
    axios
      .get(API_URL + API_PATH + API_KEY)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <></>;
}

export default DataFetching;
