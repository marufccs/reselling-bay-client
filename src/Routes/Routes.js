import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Main/DashboardLayout";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/category/:id',
                loader: ({params}) => 
                    fetch (`http://localhost:5000/category/${params.id}`),
                element: <PrivateRoute> <Products/></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute> <DashboardLayout/> </PrivateRoute>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/dashboard',
            element: <Dashboard/>
        }
      ]
    }
])