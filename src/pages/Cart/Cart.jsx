import { useLoaderData } from "react-router-dom";
import { useState } from 'react';
import CartCard from "../CartCard/CartCard";

const Cart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  return (
    <div className="h-screen mt-5 w-5/6 mx-auto">
      {products ? (
        products.map((product, idx) => (
          <CartCard key={idx} product={product} products={products} setProducts={setProducts}></CartCard>
        ))
      ) : (
        <p className="text-5xl font-bold text-center text-red-300">
          !No Products Available
        </p>
      )}
    </div>
  );
};

export default Cart;
