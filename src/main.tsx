// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");


if (rootElement) {
 
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found in the document.");
}