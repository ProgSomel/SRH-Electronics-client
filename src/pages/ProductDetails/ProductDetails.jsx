import { useLoaderData } from "react-router-dom";
import { TbCurrencyTaka } from 'react-icons/tb';
const ProductDetails = () => {
  const product = useLoaderData();

  const { image, name, brand, type, price, shortDescription, rating } = product;

  return (
    <div className="hero min-h-screen bg-base-200 max-w-screen-lg mx-auto px-2 md:px-4 lg:px-8 my-20">
      <div className="hero-content flex-col lg:flex-row">
        <img 
          src={image}
          className="lg:max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex-1">
          <h1 className="text-5xl font-bold">{name}</h1>
          <h1 className=" text-3xl font-bold mt-3 text-orange-300">{brand}</h1>
          <p className="py-3">
            {shortDescription}
          </p>
          <p className='flex items-center gap-2'>Price: <div className='flex items-center font-bold'>{price} <TbCurrencyTaka></TbCurrencyTaka></div></p>
          <p className="py-2">Rating:  
            <span className="text-orange-300 font-bold"> { rating}</span>
          </p>
          <button className="btn bg-orange-400 text-white font-bold">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
