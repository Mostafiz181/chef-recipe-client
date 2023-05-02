import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Login from './Login/Login';
import SignIn from './components/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path:"/signIn",
        element:<SignIn></SignIn>

      }

    ]
    

  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
