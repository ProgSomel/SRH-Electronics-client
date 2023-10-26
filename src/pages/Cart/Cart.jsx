import { useLoaderData } from "react-router-dom";
import CartCard from "../CartCard/CartCard";

const Cart = () => {
  const products = useLoaderData();

  return (
    <div className="h-screen mt-5">
      { products ?
        products.map((product, idx) => (
        <CartCard key={idx} product={product}></CartCard>
      )): (
        <p className="text-5xl font-bold text-center text-red-300">
          !No Products Available
        </p>
      )
      }
    </div>
  );
};

export default Cart;
