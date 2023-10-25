import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-12 h-screen my-5 w-11/12 p-5 mx-auto flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Discover the World of Tech & Electronics</h1>
        <p className="text-lg mb-8">Experience innovation like never before.</p>
        <Link to='/products'>
        <button  className="bg-white text-blue-700 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition duration-300">
          Explore Products
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
