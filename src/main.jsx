import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './layouts/Mainlayout/Mainlayout.jsx';
import Home from './components/Home/Home.jsx';
import AddProduct from './pages/AddProduct/AddProduct.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';
import ProductsByBrand from './pages/ProductsByBrand/ProductsByBrand';
import Products from './components/Products/Products';
import AuthProvider from './Providers/AuthProvider';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './routes/PrivateRoute';
import Cart from './pages/Cart/Cart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch("http://localhost:5000/products")
        

      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/brands/:brandname',
        element: <ProductsByBrand></ProductsByBrand>,
        loader: ({params})=> fetch(`http://localhost:5000/productsByBrand/${params.brandname}`)
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: ()=> fetch('http://localhost:5000/products')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/mycart/:email',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/cart/${params.email}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
