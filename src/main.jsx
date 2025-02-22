import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home.jsx"
import ProfilesPage from "./pages/ProfilesPage"
import ProfilePage from "./pages/ProfilePage"
import NotFoundPage from "./pages/NotFoundPage"

const router = createBrowserRouter([
  {
    path: "/vite-basic-with-routing/",
    element: <App />,
    children: [
      {
        path: "/vite-basic-with-routing/",
        element: <Home />,
      },
      {
        path: "/vite-basic-with-routing/profiles",
        element: <ProfilesPage />,
        children: [
          {
            path: "/vite-basic-with-routing/profiles/:profileId",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
