import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./assets/pages/App.jsx";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
