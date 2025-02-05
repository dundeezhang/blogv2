import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Blog from "./blog";
import Reader from "./reader";

import "./css/background.css";
import "./css/index.css";
import "./css/root.css";
import "./css/footer.css";
import "./css/articles.css";
import "./css/blog.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
  },
  {
    path: "articles/:filename",
    element: <Reader />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
