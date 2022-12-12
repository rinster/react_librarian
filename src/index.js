import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

/*
A <BrowserRouter> stores the current location in the browser's 
address bar using clean URLs and navigates using the browser's 
built-in history stack.
*/
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:isbnID" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
