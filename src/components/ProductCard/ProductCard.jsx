import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
  const {_id, image, name, brand, type, price, shortDescription, rating } = product;

  return (
    
    <div>
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
        <Link to={`/details/${_id}`}><btn className="btn btn-outline">Details</btn></Link>
        <Link to={`/update/${_id}`}><btn className="btn btn-outline">Update</btn></Link>
      </div>
    </div>
  </div>
    </div>
  );
};

export default ProductCard;
