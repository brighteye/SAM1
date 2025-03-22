
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
