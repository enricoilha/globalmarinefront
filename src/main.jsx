import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Home/index.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PostPage } from './pages/PostPage/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router} />

)
