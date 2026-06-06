import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

document.addEventListener("dragstart", (event) => {
  event.preventDefault();
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  const isDevToolsShortcut =
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
    (event.ctrlKey && key === "u");

  if (isDevToolsShortcut) {
    event.preventDefault();
  }
});

// eslint-disable-next-line no-undef
setInterval(() => {
  debugger;
}, 1000);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
