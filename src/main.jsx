import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LoadingAnimation from "./components/LoadingAnimation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadingAnimation>
      <App />
    </LoadingAnimation>
  </React.StrictMode>
);
