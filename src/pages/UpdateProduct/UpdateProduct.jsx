import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    
    const product = useLoaderData();
    const {
        _id,
        image,
        name,
        brand,
        type,
        price,
        shortDescription,
        rating
    } = product;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;

        const updateProduct = {
            image,
            name,
            brand,
            type,
            price,
            shortDescription,
            rating
        }

        console.log(updateProduct);
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                Swal.fire({
                  title: "Success!",
                  text: `${name} updated Successfully!`,
                  icon: "success",
                  confirmButtonText: "Cool",
                });
                
              }
        })
    }

  return (
    <div className="my-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg border border-pink-400"
      >
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Image:
          </label>
          <input
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="image"
            name="image"
            defaultValue={image}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Name:
          </label>
          <input
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            defaultValue={name}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Brand Name:
          </label>
          <input
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="brand"
            name="brand"
            defaultValue={brand}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Type:
          </label>
          <input
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="type"
            defaultValue={type}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Price:
          </label>
          <input
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="price"
            name="price"
            defaultValue={price}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Short Description:
          </label>
          <textarea
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="shortDescription"
            name="shortDescription"
            defaultValue={shortDescription}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Rating:
          </label>
          <input
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="rating"
            name="rating"
            defaultValue={rating}
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
