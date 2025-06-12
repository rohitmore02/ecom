import { createBrowserRouter } from "react-router";
import App from "./App"
import Login from "./layout/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login
  }
]);