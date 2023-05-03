import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Login from "./Login/Login";
import SignIn from "./components/SignIn/SignIn";
import AuthProvider from "./components/providers/AuthProvider";
import NotFound from "./components/NotFound/NotFound";
import ChefDetails from "./components/ChefDetails/ChefDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path:'/ChefDetails/:id',
        element:<ChefDetails></ChefDetails>,
        loader:({params})=> fetch(`http://localhost:5000/chefs/${params.id}`)

      },
      {
        path:"*",
        element:<NotFound></NotFound>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>

  </React.StrictMode>
);
