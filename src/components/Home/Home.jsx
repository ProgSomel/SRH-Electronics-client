import { Link, NavLink, useLoaderData } from "react-router-dom";


import { DiApple } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { SiSamsung, SiOneplus, SiHuawei, SiAsus } from "react-icons/si";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import Banner from "../Banner/Banner";

const Home = () => {
  const products = useLoaderData();
  console.log(products);

  const [isSeeMore, setIsSeeMore] = useState(false);
  const [isSeeLess, setIsSeeLess] = useState(false);

  // const fetchData = (brand) => {
  //     fetch(`http://localhost:5000/productsByBrand/${brand}`)
  //     .then(res=>res.json())
  //     .then(data => {
  //         console.log(data);
  //     })
  // }

  return (
    <div>
      <Banner></Banner>
      {/* ! Products Card  */}
      <div className="max-w-screen-lg mx-auto px-2 md:px-4 lg:px-8 my-20">
        <h1 className="text-5xl font-bold italic text-red-300 my-12 text-center">
          Featured Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {products
            ? isSeeMore
              ? isSeeLess
                ? products
                    .slice(0, 6)
                    .map((product) => (
                      <ProductCard
                        key={product._id}
                        product={product}
                      ></ProductCard>
                    ))
                : products.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  ))
              : products
                  .slice(0, 6)
                  .map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  ))
            : ""}
        </div>

        <div className="text-center my-5">
          {products
            ? products.length > 6 &&
              (isSeeMore ? (
                <button
                  className="bg-red-300 px-2 py-1 rounded-lg "
                  onClick={() => {
                    setIsSeeLess(!isSeeLess);
                    setIsSeeMore(false);
                  }}
                >
                  See Less
                </button>
              ) : (
                <button
                  className="bg-green-300 px-2 py-1 rounded-lg "
                  onClick={() => {
                    setIsSeeMore(!isSeeMore);
                    setIsSeeLess(false);
                  }}
                >
                  See More
                </button>
              ))
            : ""}
        </div>
      </div>

      <div className="my-20">
        <h1 className="text-5xl font-bold italic text-orange-300 text-center">
          Shop by Brands
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 max-w-screen-lg mx-auto px-2 md:px-4 lg:px-8 my-12  ">
          <Link to={`/brands/${"Apple"}`}>
            {" "}
            <div className="flex items-center gap-2 text-2xl font-semibold">
              <DiApple></DiApple>Apple{" "}
            </div>
          </Link>

          <NavLink to={`brands/${"Samsung"}`}>
            {" "}
            <div className="flex items-center gap-2 text-2xl font-semibold text-blue-500">
              <SiSamsung></SiSamsung>SAMSUNG
            </div>
          </NavLink>

          <NavLink to={`brands/${"Oneplus"}`}>
            {" "}
            <div className="flex items-center gap-2 text-2xl font-semibold text-red-500">
              <SiOneplus></SiOneplus> Oneplus
            </div>
          </NavLink>

          <NavLink to={`brands/${"Google"}`}>
            {" "}
            <div className="flex items-center gap-2 text-2xl font-semibold text-yellow-500">
              <FcGoogle></FcGoogle> Google
            </div>
          </NavLink>

          <NavLink to={`brands/${"Huawei"}`}>
            {" "}
            <div className="flex items-center gap-2 text-2xl font-semibold text-black">
              <span className="text-red-400">
                <SiHuawei></SiHuawei>
              </span>{" "}
              Huawei
            </div>
          </NavLink>

          <NavLink to={`brands/${"Asus"}`}>
            {" "}
            <div className="flex items-center gap-2 text-2xl font-semibold text-gray-500">
              <span className="text-red-400">
                <SiAsus></SiAsus>
              </span>{" "}
              Asus
            </div>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 max-w-screen-lg mx-auto px-2 md:px-4 lg:px-8 my-20">
        <img
          className="w-full lg:w-1/3"
          src="https://i.ibb.co/XSHQg5c/samsung-Ear-Phone.jpg"
          alt=""
        />
        <img
          className="w-full lg:w-1/3"
          src="https://i.ibb.co/Qp89xyv/anker.jpg"
          alt=""
        />
        <img
          className="w-full lg:w-1/3"
          src="https://i.ibb.co/BCZtXZm/wiwu.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
