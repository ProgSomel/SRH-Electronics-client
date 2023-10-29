import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout/Mainlayout.jsx";
import Home from "./components/Home/Home.jsx";
import AddProduct from "./pages/AddProduct/AddProduct.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import ProductsByBrand from "./pages/ProductsByBrand/ProductsByBrand";
import Products from "./components/Products/Products";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivateRoute from "./routes/PrivateRoute";
import Cart from "./pages/Cart/Cart";
import ErrrorPage from "./pages/ErrorPage/ErrrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrrorPage></ErrrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () =>
          fetch(
            "https://brand-shop-server-f6ezx6qlu-somel-ahmeds-projects.vercel.app/products"
          ),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-f6ezx6qlu-somel-ahmeds-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-f6ezx6qlu-somel-ahmeds-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/brands/:brandname",
        element: <ProductsByBrand></ProductsByBrand>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-f6ezx6qlu-somel-ahmeds-projects.vercel.app/productsByBrand/${params.brandname}`
          ),
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () =>
          fetch(
            "https://brand-shop-server-f6ezx6qlu-somel-ahmeds-projects.vercel.app/products"
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/mycart/:email",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-f6ezx6qlu-somel-ahmeds-projects.vercel.app/cart/${params.email}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
