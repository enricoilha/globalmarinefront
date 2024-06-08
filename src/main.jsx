import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/index.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PostPage } from "./pages/PostPage/index.jsx";
import { arrayOfPosts } from "./lib/posts.js";
import { arrayOfComments } from "./lib/comments.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
]);

if (!window.localStorage.getItem("added")) {
  window.localStorage.setItem("posts", JSON.stringify(arrayOfPosts));
  window.localStorage.setItem("comments", JSON.stringify(arrayOfComments));
} else {
  window.localStorage.setItem("added", "yes");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
