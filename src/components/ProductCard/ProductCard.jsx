import { TbCurrencyTaka } from 'react-icons/tb';
const ProductCard = ({ product }) => {
  const { image, name, brand, type, price, shortDescription, rating } = product;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-red-300">
          {name}
          
        </h2>
        <h2 className="card-title  italic font-extralight">Brand: 
          <span className='text-orange-500'>{ brand}</span>
          
        </h2>
        <p>Type: {type}</p>
        <p className='flex items-center gap-2'>Price: <div className='flex items-center'>{price} <TbCurrencyTaka></TbCurrencyTaka></div></p>
        <p className='font-extralight'>Rating: <span className='text-orange-500 font-bold'>{rating}</span></p>
        <div className="card-actions justify-end mt-5">
          <btn className="btn btn-outline">Details</btn>
          <btn className="btn btn-outline">Update</btn>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
