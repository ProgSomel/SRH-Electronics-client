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
        element: <AddProduct></AddProduct>
      },
      {
        path: '/details/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <UpdateProduct></UpdateProduct>,
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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
