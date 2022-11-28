import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Main/DashboardLayout";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";
import AddProductMystery from "../Pages/Dashboard/AddProduct/AddProductMystery";
import AddProducts from "../Pages/Dashboard/AddProduct/AddProducts";
import AddProductShortStories from "../Pages/Dashboard/AddProduct/AddProductShortStories";
import SelectCategories from "../Pages/Dashboard/AddProduct/SelectCategories";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import SelectCategoriesOfMyProducts from "../Pages/Dashboard/MyProducts/SelectCategoriesOfMyProducts";
import MyWishList from "../Pages/Dashboard/MyWishList/MyWishList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Payment from "../Pages/Payment/Payment";
import Products from "../Pages/Products/Products";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
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
                    fetch (`https://used-products-resale-market-server-eight.vercel.app/allBooks?category_id=${params.id}`),
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
        // {
        //     path: '/dashboard/selectcategory',
        //     element: <SellerRoute> <SelectCategories/> </SellerRoute>
        // },
        {
            path: '/dashboard/addproduct',
            loader: ({params}) => 
            fetch (`https://used-products-resale-market-server-eight.vercel.app/categories`),
            element: <SellerRoute> <AddProducts/> </SellerRoute>
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
        {
            path: '/dashboard/myorders/:email',
            loader: ({params}) => fetch(`https://used-products-resale-market-server-eight.vercel.app/bookings?userEmail=${params.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }),
            element:<BuyerRoute> <MyOrders/> </BuyerRoute>
        },
        {
            path: '/dashboard/mywishlist/:email',
            loader: ({params}) => fetch(`https://used-products-resale-market-server-eight.vercel.app/wishlist?email=${params.email}`),
            element:<BuyerRoute> <MyWishList/>/ </BuyerRoute>
        },
        {
            path: '/dashboard/payment/:id',
            element: <BuyerRoute> <Payment/> </BuyerRoute>,
            loader: ({params}) => fetch(`https://used-products-resale-market-server-eight.vercel.app/bookings/${params.id}`)
        },

      ]
    }
])