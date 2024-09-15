import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { appRouter } from "./App";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
