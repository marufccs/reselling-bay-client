import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Main/DashboardLayout";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import SelectCategories from "../Pages/Dashboard/AddProduct/SelectCategories";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

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
        },
        {
            path: '/dashboard/selectcategory',
            element: <SellerRoute> <SelectCategories/> </SellerRoute>
        },
        {
            path: '/dashboard/addproduct/:id',
            loader: ({params}) => 
            fetch (`http://localhost:5000/category/${params.id}`),
            element: <SellerRoute> <AddProduct/> </SellerRoute>
        },
        {
            path: '/dashboard/myproducts',
            element: <SellerRoute> <MyProducts/> </SellerRoute>
        },
        {
            path: '/dashboard/allsellers',
            element: <AdminRoute> <AllSellers/> </AdminRoute>
        },
        {
            path: '/dashboard/allbuyers',
            element: <AdminRoute> <AllBuyers/> </AdminRoute>
        },
      ]
    }
])