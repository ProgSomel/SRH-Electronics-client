import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Login = () => {
  const { signInWithGoogle, loading, signInWithEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const signInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Successfully logged in");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const signInWithEmailAndPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmail(email, password)
      .then((result) => {
        Swal.fire({
            icon: "success",
            title: "success",
            text: "Successfully signed in",
            
          });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
          
        });
      });
  };

  return (
    <div>
      <form
        onSubmit={signInWithEmailAndPassword}
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 via-amber-500 to-fuchsia-600"
      >
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Log In
          </button>
          <div className="text-center">
            <p>Or</p>
            <p className="flex items-center justify-center gap-2">
              Continue With{" "}
              <span className="cursor-pointer" onClick={signInGoogle}>
                <FcGoogle></FcGoogle>
              </span>
            </p>
          </div>
          <div>
            <p className="text-center mt-4">
              Don't Have an Account?{" "}
              <Link to="/register" className="underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
