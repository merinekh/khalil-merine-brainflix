import React from "react";
import "./Component.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "../../pages/Page/Page";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import imageUpload from "../../assets/images/Upload-video-preview.jpg";
import VideoPage from "./VideoPage/VideoPage";

function Component() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/:videoId" element={<VideoPage />} />
          <Route path="/videoUpload" element={<Page image={imageUpload} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Component;
