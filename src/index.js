import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
// import Register from './pages/Register/page'
// import Login from './pages/login/page'
// import Profile from './pages/profile/page';
import Meet from './pages/meet/page';
import VisualMeet from './pages/visualmeet/page';
import NotFound from './components/404';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "register",
  //   element: <Register />,
  // },
  // {
  //   path: "login",
  //   element: <Login />,
  // },
  // {
  //   path: "profile",
  //   element: <Profile />,
  // },
  {
    path: "meet/:id",
    element: <Meet />,
  },
  {
    path: "visualmeet",
    element: <VisualMeet />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

