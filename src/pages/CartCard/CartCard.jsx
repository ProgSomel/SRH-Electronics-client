const CartCard = ({ product }) => {
  const { image, name, price } = product;

  return (
    <div className="bg-white shadow-lg rounded-md p-4 mb-4 flex items-center justify-between hover:shadow-xl transition-transform transform hover:scale-105">
    <div className="flex items-center space-x-4">
      <div className="w-20 h-20">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">${price}</p>
      </div>
    </div>
    <button
      className="text-red-500 hover:text-red-700 focus:outline-none text-sm"
      
    >
      Remove
    </button>
  </div>
  );
};

export default CartCard;
