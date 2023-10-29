import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const CartCard = ({ product, products, setProducts }) => {
  const { image, name, price } = product;

  const { user } = useContext(AuthContext);
  const email = user.email;

  const { loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://brand-shop-server-f6ezx6qlu-somel-ahmeds-projects.vercel.app/cart/${email}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                `${name} has been deleted`,
                "success"
                //
              );
              const remaining = products.filter(
                (product) => product.email !== email
              );
              setProducts(remaining);
            }

            navigate(`/`);
          });
      }
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-md p-4 mb-4 flex items-center justify-between hover:shadow-xl transition-transform transform hover:scale-105">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">${price}</p>
        </div>
      </div>
      <button
        onClick={() => handleDelete(email)}
        className="text-red-500 hover:text-red-700 focus:outline-none text-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default CartCard;
