import "./App.scss";
import React from "react";
import "./components/Component/Component.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./pages/UploadPage/UploadPage";
import Header from "./components/Component/Header/Header";
import HomePage from "./components/Component/HomePage/HomePage";
import imageUpload from "./assets/images/Upload-video-preview.jpg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/videoUpload" element={<Page image={imageUpload} />} />
          <Route path="/:Id" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
