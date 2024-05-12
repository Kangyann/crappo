import "core/styles/app.scss";

import React from "react";
import ReactDOM from "react-dom/client";

import BrowserRouter from "./presentation/container/app";
import Home from "./presentation/container/pages/Home";
import Testing from "presentation/container/pages/Testing";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/testing",
    element: <Testing />,
  },
];
root.render(
  <React.StrictMode>
    <BrowserRouter data={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
